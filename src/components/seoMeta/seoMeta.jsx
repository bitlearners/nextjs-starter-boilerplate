import { getSeo } from "@/lib/data";

const SeoMeta = async ({ id }) => {
    try {
      const seo = await getSeo(id);
      console.log("seo:", seo);
      return (
        <div>
          {seo && seo.ptitle ? seo.ptitle : "ptitle not available"}
          {seo && seo.pdesc ? seo.pdesc : "pdesc not available"}
          {seo && seo.pkeywords ? seo.pkeywords : "pkeywords not available"}
        </div>
      );
    } catch (error) {
      console.error("Error fetching seo:", error);
      return <div>Error fetching seo</div>;
    }
  };
  

export default SeoMeta;
