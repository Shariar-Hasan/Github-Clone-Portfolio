import OtherProject from "@/components/Layers/OtherProject";
import SingleProjectShow from "@/components/Layers/SingleProjectShow";

const SingleProjectPage = ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  return (
    <div className="max-w-7xl mx-auto text-site">
      <SingleProjectShow  slug={slug} />
      <OtherProject slug={slug} />
    </div>
  );
};

export default SingleProjectPage;
