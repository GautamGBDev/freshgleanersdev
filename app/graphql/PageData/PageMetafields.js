export const HOMEPAGE_QUERY = `#graphql
  query HomePageQuery($page_name: String!) {
    page(handle: $page_name) {
      metafields(
        identifiers: [
          { key: "blog_title", namespace: "custom" },
          { key: "blog_description", namespace: "custom" },
          { key: "blog_image", namespace: "custom" },
          { key: "page_banner_text", namespace: "custom" },
          { key: "page_banner_button_text", namespace: "custom" },
          { key: "banner_image_vector_1", namespace: "custom" },
          { key: "banner_image_vector_2", namespace: "custom" },
          { key: "banner_image_vector_3", namespace: "custom" }
        ]
      ) {
        id
        value
        reference {
          ... on MediaImage {
            id
            image {
              url
            }
          }
        }
      }
    }
  }
`;