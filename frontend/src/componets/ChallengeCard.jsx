import React from 'react';


const ChallengeCard = () => (
    // currently working on Challange List Layout.
    <div className="bg-gradient-to-b from-orange-50 to-white border border-orange-200 rounded-xl shadow-md p-8 my-10 max-w-4xl mx-auto flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6 text-center">Pick Your Challenge</h2>
      <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
            <a
                href="/challenge/melody"
                className="bg-white rounded-lg shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex-1 min-w-[220px] max-w-xs p-6 text-center border border-orange-100"
            >
              <h3 className="text-xl font-semibold mb-2">Drum Lab</h3>
              <p className="text-gray-500">This is a test</p>
            </a>
        <a className="text-body">
          45 min spent
        </a>
      </div>
    </div>
);

export default ChallengeCard;
