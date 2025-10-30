import nextra from "nextra";

// Set up Nextra with its configuration
const withNextra = nextra({
  //search: false
});

// Export the final Next.js config with Nextra included
export default withNextra({
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/next.js",
  //       permanent: true,
  //     },
  //   ];
  // }
});
