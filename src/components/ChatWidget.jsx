'use client';

import { useState } from 'react';
import AppointmentModal from './AppointmentModal';

const chatApps = [
  {
    name: 'Messenger',
    color: 'bg-blue-500',
    hoverColor: 'hover:bg-blue-600',
    url: 'https://m.me/your-page-id',
    icon: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111C24 4.975 18.627 0 12 0zm1.193 14.963l-3.056-3.259-5.963 3.259L10.732 8.2l3.131 3.259L19.752 8.2l-6.559 6.763z" />
      </svg>
    ),
  },
  {
    name: 'Viber',
    color: 'bg-purple-600',
    hoverColor: 'hover:bg-purple-700',
    url: 'viber://chat?number=%2B639175315501',
    icon: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.398.002C9.473.008 5.354.207 3.153 2.067 1.525 3.355.106 5.556.011 9.498c-.097 4.205-.213 9.773 3.318 12.575l.006-.004c.379.308.87.445 1.347.366.74-.145 1.298-.751 1.43-1.523.058-.145.086-.299.082-.453 0-.15-.026-.299-.078-.44a2.17 2.17 0 00-.549-.79c-1.356-1.343-2.124-3.334-2.124-5.575 0-4.468 3.623-8.09 8.09-8.09s8.09 3.623 8.09 8.09-3.623 8.09-8.09 8.09c-.69 0-1.363-.087-2.003-.251a.929.929 0 00-.813.153c-.635.516-.643 1.36-.088 1.903.182.176.393.32.624.427a10.59 10.59 0 002.28.624c.386.06.778.09 1.17.09 5.628 0 10.186-4.56 10.186-10.186S17.858.002 11.398.002z" />
      </svg>
    ),
  },
  {
    name: 'WeChat',
    color: 'bg-green-500',
    hoverColor: 'hover:bg-green-600',
    url: 'https://weixin.qq.com',
    icon: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.14.045c.133 0 .24-.11.24-.245 0-.06-.024-.12-.04-.178l-.325-1.233a.492.492 0 01.177-.553C23.025 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-7.062-6.122zM14.033 12.5c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.97-.982z" />
      </svg>
    ),
  },
];

export default function ChatWidget() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {showTooltip && (
          <div className="bg-white rounded-2xl shadow-2xl p-4 mb-2 max-w-[260px] border border-gray-100 animate-fadeIn">
            <p className="text-sm text-gray-700 font-medium mb-3">Chat with us on:</p>
            <div className="space-y-1">
              {chatApps.map((app) => (
                <a
                  key={app.name}
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-2.5 rounded-xl transition-colors group ${app.hoverColor}`}
                >
                  <div className={`w-10 h-10 rounded-full ${app.color} flex items-center justify-center flex-shrink-0`}>
                    {app.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 group-hover:text-white">{app.name}</p>
                    <p className="text-xs text-gray-400 group-hover:text-white/70">Quick response</p>
                  </div>
                </a>
              ))}
            </div>
            <hr className="my-2 border-gray-100" />
            <button
              onClick={() => { setShowModal(true); setShowTooltip(false); }}
              className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gold-50 transition-colors w-full group"
            >
              <div className="w-10 h-10 rounded-full bg-gold-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 group-hover:text-gold-600">Schedule Visit</p>
                <p className="text-xs text-gray-400">Book a tour</p>
              </div>
            </button>
          </div>
        )}

        <button
          onClick={() => setShowTooltip(!showTooltip)}
          className="w-14 h-14 rounded-full bg-gold-600 hover:bg-gold-700 text-white shadow-2xl hover:shadow-gold-600/40 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Chat options"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div>

      <AppointmentModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
