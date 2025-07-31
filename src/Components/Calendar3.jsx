import React, { useState, useMemo } from 'react';

// --- Festival Data (Grouped by State) ---
// Same comprehensive data as before.
const festivalsByState = {
  'All India': {
    '2025-08-19': 'Raksha Bandhan',
    '2025-08-26': 'Janmashtami',
    '2025-10-02': 'Dussehra / Gandhi Jayanti',
    '2025-10-21': 'Diwali',
    '2025-12-25': 'Christmas',
    '2026-01-14': 'Makar Sankranti',
    '2026-01-26': 'Republic Day',
    '2026-02-14': 'Maha Shivaratri',
    '2026-03-05': 'Holi',
    '2026-03-27': 'Ram Navami',
    '2026-04-20': 'Eid-ul-Fitr (Tentative)',
    '2026-06-27': 'Eid-ul-Adha (Tentative)',
  },
  'Andhra Pradesh': { '2026-03-20': 'Ugadi' },
  'Assam': { '2026-01-15': 'Magh Bihu', '2026-04-14': 'Bohag Bihu', '2025-06-22': 'Ambubachi Mela' },
  'Bihar': { '2025-11-06': 'Chhath Puja' },
  'Goa': { '2026-02-22': 'Goa Carnival' },
  'Gujarat': { '2025-09-22': 'Navaratri Start', '2026-01-14': 'Uttarayan' },
  'Haryana': { '2026-01-13': 'Lohri', '2026-04-14': 'Baisakhi' },
  'Himachal Pradesh': { '2025-10-02': 'Kullu Dussehra' },
  'Jammu & Kashmir': { '2026-04-14': 'Baisakhi' },
  'Jharkhand': { '2026-04-03': 'Sarhul' },
  'Karnataka': { '2025-10-02': 'Mysuru Dasara', '2026-03-20': 'Ugadi' },
  'Kerala': { '2025-09-15': 'Onam', '2026-04-14': 'Vishu', '2026-05-01': 'Thrissur Pooram' },
  'Ladakh': { '2026-06-26': 'Hemis Festival' },
  'Madhya Pradesh': { '2026-02-20': 'Khajuraho Dance Fest' },
  'Maharashtra': { '2025-09-07': 'Ganesh Chaturthi', '2026-03-20': 'Gudi Padwa' },
  'Manipur': { '2026-03-05': 'Yaosang (Holi)' },
  'Nagaland': { '2025-12-01': 'Hornbill Festival' },
  'Odisha': { '2026-06-18': 'Ratha Yatra', '2025-06-14': 'Raja Parba' },
  'Punjab': { '2026-01-13': 'Lohri', '2026-04-14': 'Baisakhi', '2025-11-15': 'Guru Nanak Jayanti' },
  'Rajasthan': { '2025-08-07': 'Teej', '2025-11-08': 'Pushkar Fair' },
  'Sikkim': { '2026-02-18': 'Losar' },
  'Tamil Nadu': { '2026-01-14': 'Pongal', '2026-04-14': 'Puthandu', '2026-01-21': 'Thaipusam' },
  'Telangana': { '2025-07-20': 'Bonalu', '2026-03-20': 'Ugadi' },
  'Tripura': { '2025-07-01': 'Kharchi Puja' },
  'Uttar Pradesh': { '2025-11-06': 'Chhath Puja' },
  'Uttarakhand': { '2025-06-05': 'Ganga Dussehra' },
  'West Bengal': { '2025-09-28': 'Durga Puja', '2026-01-22': 'Saraswati Puja', '2026-04-15': 'Poila Boishakh' },
};

const states = Object.keys(festivalsByState).sort();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const years = [2025, 2026];

// --- Helper Functions ---
const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

// --- Main Calendar Component ---
const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedState, setSelectedState] = useState('All India');
  const [selectedFestivalDate, setSelectedFestivalDate] = useState('');

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const availableFestivals = useMemo(() => {
    const allIndiaFests = festivalsByState['All India'];
    const stateFests = festivalsByState[selectedState] || {};
    const combinedFests = { ...allIndiaFests, ...stateFests };
    return Object.entries(combinedFests).sort((a, b) => new Date(a[0]) - new Date(b[0]));
  }, [selectedState]);

  // --- Handlers ---
  const handleDateChange = (year, month) => {
    setCurrentDate(new Date(year, month, 1));
    setSelectedFestivalDate('');
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedFestivalDate('');
  };
  
  const handleFestivalChange = (e) => {
    const festivalDateStr = e.target.value;
    setSelectedFestivalDate(festivalDateStr);
    if (festivalDateStr) {
      const [fYear, fMonth, fDay] = festivalDateStr.split('-').map(Number);
      setCurrentDate(new Date(fYear, fMonth - 1, fDay));
    }
  };

  // --- Render Logic ---
  const renderCalendarDays = () => {
    const totalDays = daysInMonth(year, month);
    const startingDay = firstDayOfMonth(year, month);
    const today = new Date();
    const stateFestivals = festivalsByState[selectedState] || {};
    const allIndiaFestivals = festivalsByState['All India'];
    const days = [];

    for (let i = 0; i < startingDay; i++) {
      days.push(<div key={`empty-${i}`} className="border-r border-b border-amber-100"></div>);
    }

    for (let day = 1; day <= totalDays; day++) {
      const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const festival = stateFestivals[dateString] || (selectedState !== 'All India' ? allIndiaFestivals[dateString] : null);
      const isSelectedFestival = dateString === selectedFestivalDate;
      const isToday = day === today.getDate() && month === today.getMonth() && year === today.getFullYear();

      const dayClasses = `
        relative flex flex-col h-24 p-2 transition-all duration-300 ease-in-out cursor-pointer group rounded-lg
        ${isSelectedFestival ? 'bg-yellow-200/80 shadow-lg scale-105' : 'hover:bg-yellow-50/80'}
      `;
      
      days.push(
        <div key={day} className="border-r border-b border-amber-100 p-1">
          <div className={dayClasses} title={festival || ''} onClick={() => festival && handleFestivalChange({target: {value: dateString}})}>
            <div className={`
              flex items-center justify-center w-8 h-8 rounded-full font-bold text-lg transition-all
              ${isToday ? 'bg-amber-500 text-white shadow-md' : 'text-gray-700 group-hover:text-amber-600'}
              ${isSelectedFestival ? 'bg-yellow-500 text-white' : ''}
            `}>
              {day}
            </div>
            {festival && (
              <div className="mt-1 flex-grow overflow-hidden text-center">
                <p className="text-xs font-bold text-amber-800" aria-label={festival}>
                  {festival}
                </p>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
              </div>
            )}
          </div>
        </div>
      );
    }
    
    const remainingCells = (7 - (days.length % 7)) % 7;
    for (let i = 0; i < remainingCells; i++) {
        days.push(<div key={`empty-end-${i}`} className="border-r border-b border-amber-100"></div>);
    }
    return days;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 w-full max-w-5xl mx-auto font-sans border border-gray-200">
      {/* Main Heading */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">
          Festival Calendar
        </h1>
      </div>

      {/* Filters Section with new styling */}
      <div className="mb-6 p-4 bg-gradient-to-r from-yellow-50 to-amber-100 rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
        {[{id: 'state-filter', label: 'Rajya (State)', value: selectedState, handler: handleStateChange, options: states.map(s => [s,s])},
          {id: 'festival-filter', label: 'Tyohaar (Festival)', value: selectedFestivalDate, handler: handleFestivalChange, options: [['', 'Koi tyohaar chunein...'], ...availableFestivals]},
          {id: 'month-filter', label: 'Mahina (Month)', value: month, handler: (e) => handleDateChange(year, parseInt(e.target.value)), options: months.map((m, i) => [i,m])},
          {id: 'year-filter', label: 'Saal (Year)', value: year, handler: (e) => handleDateChange(parseInt(e.target.value), month), options: years.map(y => [y,y])}
        ].map(filter => (
          <div key={filter.id}>
            <label htmlFor={filter.id} className="block text-sm font-semibold text-amber-800 mb-1">{filter.label}</label>
            <div className="relative">
              <select id={filter.id} value={filter.value} onChange={filter.handler} className="w-full appearance-none p-2.5 bg-white border-2 border-amber-200 rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition">
                {filter.options.map(([val, name]) => <option key={val} value={val}>{name}</option>)}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path></svg>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-4 mt-6 px-2">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">{monthName} {year}</h2>
        <button onClick={() => setCurrentDate(new Date())} className="px-5 py-2 text-sm font-semibold text-amber-600 bg-amber-100 rounded-full hover:bg-amber-200 transition-colors duration-300 shadow-sm border border-amber-200">
          Aaj
        </button>
      </div>
      
      {/* Calendar Grid */}
      <div className="grid grid-cols-7 border-t border-l border-amber-100 bg-amber-50/50 rounded-t-lg">
        {daysOfWeek.map(day => (
          <div key={day} className="p-3 text-center font-bold text-amber-700 border-r border-b border-amber-100 text-sm">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 border-l border-b border-amber-100 rounded-b-lg">{renderCalendarDays()}</div>
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Calendar />
    </div>
  );
}

export default App;
