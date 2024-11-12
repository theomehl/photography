export default {
    tags: "photos",
    layout: "layouts/photo.njk",
    permalink: function({page}) {
        return `/photo/${page.fileSlug}/`;
    }
}