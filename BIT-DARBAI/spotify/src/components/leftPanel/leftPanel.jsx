import PanelBody from "../LeftPanel/PanelBody/PanelBody";
import PanelFooter from "../LeftPanel/PanleFooter/PanelFooter";
import PanelHeader from "../LeftPanel/PanleHeader/PanelHeader";

function LeftPanel() {
  return (
    <div className="flex flex-col gap-4 min-h-[100vh] w-1/5">
      <PanelHeader />
      <PanelBody />
      <PanelFooter />
    </div>
  );
}
export default LeftPanel;