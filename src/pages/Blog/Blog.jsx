import { VStack } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

import LinkTreeSocial from "../../components/LinkTree/LinkTreeSocial/LinkTreeSocial";
import LinkTreeHeader from "../../components/LinkTree/LinkTreeHeader/LinkTreeHeader";
import BlogCards from "../../components/Blog/BlogCards/BlogCards";
import { devToAPI } from "../../constants/links";
import BlogShimmer from "../../components/Blog/BlogShimmer/BlogShimmer";
import BlogLoader from "../../components/Blog/BlogLoader/BlogLoader";

export default function Blog() {
  const PAGE_SIZE = 3;
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const observer = useRef();

  const lastElement = (node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      console.log("in", entries);
      if (entries[0].isIntersecting && hasMore) {
        setPage((prevPageNumber) => prevPageNumber + 1);
      }
    });
    console.log("node", node);
    if (node) observer.current.observe(node);
  };

  const fetchBlogsCount = async () => {
    await fetch(`${devToAPI}`, {
      method: "GET",
      headers: {
        origin: "http://localhost:3000",
        Accept: "application/vnd.forem.api-v1+json",
      },
    })
      .then((res) => res?.json())
      .then((data) => {
        setTotalPages(data / PAGE_SIZE);
      })
      .catch((error) => console.log(error));
  };

  const fetchBlogs = async () => {
    await fetch(`${devToAPI}&per_page=${PAGE_SIZE}&page=${page}`, {
      method: "GET",
      headers: {
        origin: "http://localhost:3000",
        Accept: "application/vnd.forem.api-v1+json",
      },
    })
      .then((res) => res?.json())
      .then((data) => {
        setArticles((prevItems) => [...prevItems, ...data]);
        setHasMore(data.length > 0);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (page <= totalPages) {
      setLoading(true);
      fetchBlogs(page);
    }
  }, [page]);

  useEffect(() => {
    fetchBlogsCount();
  }, []);

  return (
    <VStack alignItems="center" flex={1} w="full">
      <VStack as="main" maxWidth="3xl" align={"center"} spacing="5">
        <LinkTreeHeader />
        {articles?.length === 0
          ? Array(3)
              ?.fill("")
              ?.map((i, index) => <BlogShimmer key={index} />)
          : articles?.map((data, index) => {
              if (data.length === index + 1) {
                return (
                  <BlogCards ref={lastElement} key={data?.id} data={data} />
                );
              } else {
                return <BlogCards key={data?.id} data={data} />;
              }
            })}
        {loading && <BlogLoader />}
        <span style={{ marginBottom: "2rem" }} />
        <LinkTreeSocial />
      </VStack>
    </VStack>
  );
}
