import React, { useEffect, useState } from "react";
import "react-notion/src/styles.css";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { NotionRenderer } from "react-notion";
import { useRouter } from "next/router";

// const rootNotionPageId = "e29fc3a92c4a44c98210f5142b751502"; // collection

let fetchData = async (postId) => {
  console.log("ran!");
  const response = await fetch(
    `https://notion-api.splitbee.io/v1/page/${postId}`
  );
  const data = await response.json();
  console.log("data", data);
  return data.data;
};

const Post = () => {
  const router = useRouter();
  const { postId } = router.query;
  const [postData, setPostData] = useState(null);
  // const [loading, setLoading] = useState(true);

  postId && console.log("postId", postId);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const checkFloor = async () => {
      const settings = {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };

      try {
        setIsLoading(true);

        const fetchResponse = await fetch(
          `https://notion-api.splitbee.io/v1/page/${postId}`,
          settings
        );

        const data = await fetchResponse.json();

        console.log("data1", data);

        setPostData(data);
        setIsLoading(false);
      } catch {
        console.error("Error fetching floor toadz");
      }
    };

    postId && checkFloor();
  }, []);

  // useEffect(() => {
  //   let componentMounted = true;

  //   if (postId != null) {
  //     fetchData(postId).then((notionData) => {
  //       if (componentMounted) {
  //         setPostData(notionData);
  //         setLoading(false);
  //       }
  //     });
  //   }
  //   return () => {
  //     componentMounted = false;
  //   };
  // }, [postData]);

  postData && console.log("postData", postData);
  console.log("ran");

  return (
    !isLoading && (
      <div className="text-white">
        {postData && <NotionRenderer blockMap={postData} />}
      </div>
    )
  );
};

// export async function getStaticPaths() {
//   // ...
// }

// export async function getStaticProps() {
//   const data = await fetch(
//     `https://notion-api.splitbee.io/v1/page/${rootNotionPageId}`
//   ).then((res) => res.json());

//   return {
//     props: {
//       blockMap: data,
//     },
//   };
// }

// // This also gets called at build time
// export async function getStaticProps({ params }) {
//   // params contains the post `id`.
//   // If the route is like /posts/1, then params.id is 1
//   console.log("P", params);
//   // const res = await fetch(
//   //   `https://notion-api.splitbee.io/v1/page/${params.id}`
//   // );
//   // const post = await res.json();

//   // post && console.log("post2", post);

//   // // Pass post data to the page via props
//   // return { props: { post } };
// }

export default Post;
