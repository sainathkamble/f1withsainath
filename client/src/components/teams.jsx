import React from 'react';
import ErrorBoundary from './ErrorBoundary';

const TeamsContent = () => {
  // Hardcoded teams data
  const teamsList = [
    {
      id: 1,
      name: "Red Bull Racing",
      fullName: "Oracle Red Bull Racing",
      country: "AUT",
      base: "Milton Keynes, United Kingdom",
      teamPrincipal: "Christian Horner",
      chassis: "RB21",
      powerUnit: "Honda RBPT",
      firstEntry: 1997,
      worldChampionships: 6,
      logo: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/red-bull-racing.png.transform/2col/image.png"
    },
    {
      id: 2,
      name: "Mercedes",
      fullName: "Mercedes-AMG PETRONAS F1 Team",
      country: "DEU",
      base: "Brackley, United Kingdom",
      teamPrincipal: "Toto Wolff",
      chassis: "W16",
      powerUnit: "Mercedes",
      firstEntry: 1970,
      worldChampionships: 8,
      logo: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/mercedes.png.transform/2col/image.png"
    },
    {
      id: 3,
      name: "Ferrari",
      fullName: "Scuderia Ferrari",
      country: "ITA",
      base: "Maranello, Italy",
      teamPrincipal: "Frédéric Vasseur",
      chassis: "SF-25",
      powerUnit: "Ferrari",
      firstEntry: 1950,
      worldChampionships: 16,
      logo: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/ferrari.png.transform/2col/image.png"
    },
    {
      id: 4,
      name: "McLaren",
      fullName: "McLaren F1 Team",
      country: "GBR",
      base: "Woking, United Kingdom",
      teamPrincipal: "Andrea Stella",
      chassis: "MCL39",
      powerUnit: "Mercedes",
      firstEntry: 1966,
      worldChampionships: 8,
      logo: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/mclaren.png.transform/2col/image.png"
    },
    {
      id: 5,
      name: "Aston Martin",
      fullName: "Aston Martin Aramco F1 Team",
      country: "GBR",
      base: "Silverstone, United Kingdom",
      teamPrincipal: "Mike Krack",
      chassis: "AMR25",
      powerUnit: "Mercedes",
      firstEntry: 2018,
      worldChampionships: 0,
      logo: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/aston-martin.png.transform/2col/image.png"
    },
    {
      id: 6,
      name: "Alpine",
      fullName: "BWT Alpine F1 Team",
      country: "FRA",
      base: "Enstone, United Kingdom",
      teamPrincipal: "Bruno Famin",
      chassis: "A525",
      powerUnit: "Renault",
      firstEntry: 1981,
      worldChampionships: 0,
      logo: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/alpine.png.transform/2col/image.png"
    },
    {
      id: 7,
      name: "Williams",
      fullName: "Williams Racing",
      country: "GBR",
      base: "Grove, United Kingdom",
      teamPrincipal: "James Vowles",
      chassis: "FW47",
      powerUnit: "Mercedes",
      firstEntry: 1978,
      worldChampionships: 9,
      logo: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/williams.png.transform/2col/image.png"
    },
    {
      id: 8,
      name: "RB",
      fullName: "Visa Cash App RB F1 Team",
      country: "ITA",
      base: "Faenza, Italy",
      teamPrincipal: "Laurent Mekies",
      chassis: "VCARB 02",
      powerUnit: "Honda RBPT",
      firstEntry: 2006,
      worldChampionships: 0,
      logo: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/rb.png.transform/2col/image.png"
    },
    {
      id: 9,
      name: "Stake F1",
      fullName: "Stake F1 Team Kick Sauber",
      country: "CHE",
      base: "Hinwil, Switzerland",
      teamPrincipal: "Alessandro Alunni Bravi",
      chassis: "C45",
      powerUnit: "Ferrari",
      firstEntry: 1993,
      worldChampionships: 0,
      logo: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/stake-f1-team-kick-sauber.png.transform/2col/image.png"
    },
    {
      id: 10,
      name: "Haas",
      fullName: "MoneyGram Haas F1 Team",
      country: "USA",
      base: "Kannapolis, United States",
      teamPrincipal: "Ayao Komatsu",
      chassis: "VF-25",
      powerUnit: "Ferrari",
      firstEntry: 2016,
      worldChampionships: 0,
      logo: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/haas-f1-team.png.transform/2col/image.png"
    }
  ];

  // Function to get country code for flag API
  const getCountryCode = (code) => {
    return code.toLowerCase();
  };

  return (
    <div className="h-screen flex flex-col bg-[#0a0a0a]">
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-[#f5f5f5] mb-8 text-center hover:text-[#b50000] hover:scale-105 transition-all duration-300 cursor-default">
          F1 Teams 2024
        </h1>
        <div className="h-[calc(100vh-12rem)] overflow-y-auto pr-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamsList.map((team) => (
              <div key={team.id} className="bg-[#1a1a1a] rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.3)] overflow-hidden border border-[#2a2a2a] hover:border-[#b50000] hover:shadow-[0_8px_30px_rgba(181,0,0,0.2)] transition-all duration-300">
                {/* Top Section */}
                <div className="p-4 flex items-start space-x-4">
                  {/* Team Logo */}
                  <div className="w-24 h-24 flex-shrink-0">
                    <img
                      src={team.logo}
                      alt={team.name}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/default-team.png';
                      }}
                    />
                  </div>
                  {/* Team Info */}
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-[#f5f5f5]">{team.name}</h2>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-[#f5f5f5]">{team.country}</span>
                      <img
                        src={`https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/${getCountryCode(team.country)}.svg`}
                        alt={`${team.country} flag`}
                        className="w-5 h-3 object-cover rounded-sm"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    <p className="text-[#666] mt-2">{team.teamPrincipal}</p>
                  </div>
                </div>
                {/* Bottom Section */}
                <div className="bg-[#2a2a2a] p-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-[#666]">Base</p>
                      <p className="text-[#f5f5f5] font-medium">{team.base}</p>
                    </div>
                    <div>
                      <p className="text-[#666]">Chassis</p>
                      <p className="text-[#f5f5f5] font-medium">{team.chassis}</p>
                    </div>
                    <div>
                      <p className="text-[#666]">Power Unit</p>
                      <p className="text-[#f5f5f5] font-medium">{team.powerUnit}</p>
                    </div>
                    <div>
                      <p className="text-[#666]">World Championships</p>
                      <p className="text-[#f5f5f5] font-medium">{team.worldChampionships}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Teams = () => {
  return (
    <ErrorBoundary>
      <TeamsContent />
    </ErrorBoundary>
  );
}; 