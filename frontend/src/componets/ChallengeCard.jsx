// src/componets/ChallengeCard

import React from 'react';

const ChallengeCard = () => (
    <div className="bg-gradient-to-b from-orange-50 to-white border border-orange-200 rounded-xl shadow-md p-8 my-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Code Generative Beat Lab</h2>
      <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
        {/* Challenge One */}
        <a
            href="/challenge/beatlab"
            className="bg-white rounded-lg shadow flex-1 min-w-[220px] max-w-xs p-6 text-center border border-orange-100"
        >
          <h3 className="text-xl font-semibold mb-2">Beat Lab</h3>
          <p className="text-gray-500">n/a</p>
        </a>
        {/* Challenge Two */}
        <a
            href="/challenge/melodylab"
            className="bg-white rounded-lg shadow flex-1 min-w-[220px] max-w-xs p-6 text-center border border-orange-100"
        >
          <h3 className="text-xl font-semibold mb-2">Melody Lab</h3>
          <p className="text-gray-500">N/a</p>
        </a>
        {/* Challenge Three */}
        <a
            href="/challenge/remixlab"
            className="bg-white rounded-lg shadow flex-1 min-w-[220px] max-w-xs p-6 text-center border border-orange-100"
        >
          <h3 className="text-xl font-semibold mb-2">Remix Lab</h3>
          <p className="text-gray-500">n/a.</p>
        </a>
      </div>
    </div>
);

export default ChallengeCard;
