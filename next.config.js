const withTM = require("next-transpile-modules")([
  "@react-three/drei",
  "three"
]);

module.exports = withTM({
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/nexe',
        destination: `https://nexe.${process.env.NEXT_PUBLIC_BASE_DOMAIN}/`,
        permanent: true
      }
    ]
  }
});