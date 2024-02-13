import ContentHeader from "../Content/ContentHeader/ContentHeader";
import ContentBody from "../Content/ContentBody/ContentBody";
function Content() {
  return (
    <div className="w-4/5 rounded-lg flex flex-col gap-4">
      <ContentHeader />
      <ContentBody />
    </div>
  );
}
export default Content;