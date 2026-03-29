import React, { useState, useRef, useEffect } from 'react';

const SearchableDropDown = ({ label, value, onChange, options, iconName = 'arrow_drop_down', containerColor = 'bg-surface-container-lowest', iconColorClass = 'text-primary', iconBgClass = 'bg-primary-container', noOptionsMessage }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const dropdownRef = useRef(null);

    const filteredOptions = options.filter(option => 
        option.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
                setSearchTerm('');
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelectOption = (option) => {
        onChange(option);
        setSearchTerm('');
        setIsOpen(false);
    };

    return (
        <div ref={dropdownRef} className={`p-6 rounded-xl shadow-[0_10px_30px_rgba(78,41,5,0.04)] dark:shadow-[0_40px_60px_rgba(20,20,50,0.06)] space-y-4 ${containerColor} dark:bg-[#1a1b3b] relative`}>
            <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${iconBgClass} dark:bg-[#252650]`}>
                    <span className={`material-symbols-outlined ${iconColorClass} dark:text-[#7fd7fe]`} style={{ fontVariationSettings: "'FILL' 1" }}>{iconName}</span>
                </div>
                <div>
                    <span className="block text-xs font-bold uppercase tracking-widest text-outline dark:text-[#7fd7fe]">Select</span>
                    <h3 className="font-headline text-lg font-bold dark:text-[#e5e3fb]">{label}</h3>
                </div>
            </div>
            
            <div className="relative">
                <div 
                    className="flex items-center w-full bg-surface-container-low dark:bg-[#252650] rounded-full px-6 py-4 text-on-surface dark:text-[#e5e3fb] font-medium focus-within:ring-2 focus-within:ring-secondary/20 dark:focus-within:ring-[#7fd7fe]/30 cursor-text transition-all"
                    onClick={() => setIsOpen(true)}
                >
                    <input
                        type="text"
                        placeholder={value || `Select ${label}...`}
                        value={isOpen ? searchTerm : (value || '')}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            if (!isOpen) setIsOpen(true);
                        }}
                        className="w-full bg-transparent border-none p-0 focus:ring-0 placeholder:text-on-surface/50 dark:placeholder:text-[#a5a3d0]/50 text-on-surface dark:text-[#e5e3fb] focus:outline-none"
                    />
                    <span className="material-symbols-outlined text-on-surface-variant dark:text-[#a5a3d0] flex-shrink-0 cursor-pointer" onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }} style={{ fontVariationSettings: "'FILL' 1" }}>
                        {isOpen ? 'arrow_drop_up' : 'arrow_drop_down'}
                    </span>
                </div>

                {isOpen && (
                    <div className="absolute z-50 w-full mt-2 bg-surface-container-highest dark:bg-[#1a1b3b] rounded-2xl shadow-xl border border-outline-variant/20 dark:border-white/5 overflow-hidden max-h-60 overflow-y-auto no-scrollbar">
                        {filteredOptions.length > 0 ? (
                            <ul className="py-2">
                                {filteredOptions.map((option, index) => (
                                    <li 
                                        key={index}
                                        onClick={() => handleSelectOption(option)}
                                        className={`px-6 py-3 cursor-pointer transition-colors hover:bg-[#FF914B]/15 hover:text-[#9c4600] dark:hover:bg-[#7fd7fe]/20 dark:hover:text-[#7fd7fe] text-on-surface dark:text-[#e5e3fb] font-medium ${value === option ? 'bg-[#FF914B]/20 text-[#9c4600] dark:bg-[#7fd7fe]/10 dark:text-[#7fd7fe] font-bold' : ''}`}
                                    >
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className="px-6 py-4 text-center text-on-surface-variant dark:text-[#a5a3d0] font-medium">
                                {(options.length === 0 && noOptionsMessage) ? noOptionsMessage : `No ${label.toLowerCase()} found`}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchableDropDown;
