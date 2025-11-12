import React from 'react';

export const Button = ({ children, className = '', onClick, disabled = false, type = 'button' }) => {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`
        inline-flex items-center justify-center font-medium transition-colors duration-200
        rounded-full h-10 px-4 py-2 
        bg-blue-muted text-white hover:bg-blue-bright focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-bright
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
        >
            {children}
        </button>
    );
};
