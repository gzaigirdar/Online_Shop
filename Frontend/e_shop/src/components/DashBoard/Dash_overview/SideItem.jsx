function SideItem({ title, svg, switch_comp }) {
  return (
    <div className="sm:w-full px-2 shrink-0" onClick={() => switch_comp?.(title)}>
      <div className="flex flex-col items-center sm:w-full mt-0 sm:border-t border-gray-300">
        <div className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300">
          {svg}
          <span className="ml-2 text-sm font-medium hidden sm:inline">{title}</span>
        </div>
      </div>
    </div>
  );
}

export default SideItem;