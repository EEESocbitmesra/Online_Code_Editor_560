import { Menu } from "@material-ui/core";
import { useState } from "react";
import bottom from "../assets/images/bottom-view.svg";
import left from "../assets/images/column.svg";
import right from "../assets/images/right.svg";
import { useEditor } from "../context/AppContext";

const OrientationMenu = () => {
  const { setAlignment } = useEditor();

  const [anchorEl, setAnchorEl] = useState(null);

  // Opens ChangeView menu
  const openOrientationMenu = (e) => setAnchorEl(e.currentTarget);

  // Closes the ChangeView Menu
  const closeOrientationMenu = () => setAnchorEl(null);

  // Changes the alignment of the editors
  // @for context
  const handleAlignment = (position) => {
    setAlignment(position);
    closeOrientationMenu();
  };

  return (
    <>
      <button
        className="flex items-center gap-2 px-4 py-2 rounded-md justify-evenly hover:text-textSecondary focus:outline-none"
        onClick={openOrientationMenu}
      >
        <span className="material-icons">view_agenda</span>
        <span className="text-sm">Change View</span>
      </button>

      <Menu
        id="alignmentOptions"
        anchorEl={anchorEl}
        keepMounted
        className="p-0 border-0"
        open={Boolean(anchorEl)}
        onClose={closeOrientationMenu}
      >
        <div className="flex items-center gap-3 p-5 bg-paper justify-evenly w-80">
          <div
            className="cursor-pointer"
            onClick={() => handleAlignment("right")}
          >
            <img src={right} className="w-8" alt="right" />
          </div>

          <div
            className="cursor-pointer"
            onClick={() => handleAlignment("bottom")}
          >
            <img src={bottom} className="w-8" alt="bottom" />
          </div>

          <div
            className="cursor-pointer"
            onClick={() => handleAlignment("left")}
          >
            <img src={left} className="w-8" alt="left" />
          </div>
        </div>
      </Menu>
    </>
  );
};

export default OrientationMenu;
