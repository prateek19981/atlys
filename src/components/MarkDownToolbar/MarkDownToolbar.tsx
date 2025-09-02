import React from 'react';

interface ToolbarProps {
  className?: string;
}

const Toolbar: React.FC<ToolbarProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-4 px-3 py-2  ${className} bg-black/[0.03] rounded-[10px] w-[70%]`}>
      <div className="flex items-center gap-1 text-sm text-gray-700 cursor-pointer">
        <span>Paragraph</span>
        <svg className="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
      <button className="w-6 h-6 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded text-sm font-bold">
        B
      </button>
      <button className="w-6 h-6 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded text-sm italic">
        I
      </button>
      <button className="w-6 h-6 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded text-sm underline">
        U
      </button>
      <button className="w-6 h-6 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"/>
        </svg>
      </button>
      <button className="w-6 h-6 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 000 2v9a1 1 0 001 1h1a1 1 0 100-2v-7a1 1 0 000-2H3zM8 5a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1zM8 9a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1zM8 13a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1z"/>
        </svg>
      </button>
      <button className="w-6 h-6 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded text-xs">
        ❝❞
      </button>
      <button className="w-6 h-6 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      </button>
    </div>
  );
};

export default Toolbar;