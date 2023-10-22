require("babel-register")({
  presets: ["es2015", "react"],
});

const router = require("./sitemapRoutes"); // 좀 전에 만든 sitemapRoutes 파일이 있는 경로입니다.
const Sitemap = require("react-router-sitemap");

const generateSitemap = () => {
  return new Sitemap(router)
    .build("https://www.open-set-go.com")
    .save("./public/sitemap.xml");
};

generateSitemap();
