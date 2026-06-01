/**
 * @file IPRBeneficiary.jsx
 * @description Renders a table of Intellectual Property Rights (IPR) beneficiaries, showing their title, IP type (Patent/Trademark/Copyright/Design), application number, and status (Granted/Published/Applied).
 */

/**
 * Array of IPR filing details database records
 * @type {Array<{srNo: number, title: string, type: string, appNo: string, status: string}>}
 */
const beneficiaries = [
  {
    srNo: 1,
    title: "PROCESS FOR PREPARING METFORMIN HCL USING CRYSTALLO-CO-AGGLOMERATION APPROACH",
    type: "Patent",
    appNo: "IN 202021030026",
    status: "Granted"
  },
  {
    srNo: 2,
    title: "SILIBININ LOADED LIPOSOMAL NANOPARTICLES",
    type: "Patent",
    appNo: "IN 202021033811",
    status: "Granted"
  },
  {
    srNo: 3,
    title: "A VAGINAL TOPICAL SPRAY OF CURCUMIN",
    type: "Patent",
    appNo: "IN 202021056463",
    status: "Published"
  },
  {
    srNo: 4,
    title: "A BACTERIOPHAGE GEL COMPOSITION",
    type: "Patent",
    appNo: "IN202021048766",
    status: "Granted"
  },
  {
    srNo: 5,
    title: "A SUPER HYDROPHOBIC COATING LIQUID COMPOSITION",
    type: "Patent",
    appNo: "IN 202121000483",
    status: "Published"
  },
  {
    srNo: 6,
    title: "A SYSTEM AND METHOD TO IMPROVE X-RAY IMAGE ANALYSIS",
    type: "Patent",
    appNo: "IN 202021056641",
    status: "Published"
  },
  {
    srNo: 7,
    title: "A NOVEL PROCESS OF PREPARING ALUMINA NANO POWDER.",
    type: "Patent",
    appNo: "IN 202121012255",
    status: "Published"
  },
  {
    srNo: 8,
    title: "A PROCESS FOR SEEDS BIOPRIMING WITH BACILLUS XIAMENENSIS S5",
    type: "Patent",
    appNo: "IN 202121018805",
    status: "Published"
  },
  {
    srNo: 9,
    title: "A PROCESS FOR SEEDS BIOPRIMING WITH BACILLUS STRATOSPERICUS M48",
    type: "Patent",
    appNo: "IN 202121018804",
    status: "Published"
  },
  {
    srNo: 10,
    title: "A PROCESS FOR SEEDS BIOPRIMING WITH BACILLUS SAFENSIS S8",
    type: "Patent",
    appNo: "IN 202121018803",
    status: "Published"
  },
  {
    srNo: 11,
    title: "A LIQUID FORMULATION OF PSEUDOMONAS PUTIDA JR9",
    type: "Patent",
    appNo: "IN 202121019340",
    status: "Published"
  },
  {
    srNo: 12,
    title: "A CRYSTALLO CO- AGGLOMERATE OF PRAZIQUANTEL AND PROCESS OR PREPARING THE SAME",
    type: "Patent",
    appNo: "IN 202121031020",
    status: "Granted"
  },
  {
    srNo: 13,
    title: "A NANO PARTICULATE NASAL FORMULATION OF AMISULPRIDE",
    type: "Patent",
    appNo: "IN 202121032772",
    status: "Published"
  },
  {
    srNo: 14,
    title: "A POLYHERBAL HAIR OIL FORMULATION",
    type: "Patent",
    appNo: "IN 202121031438",
    status: "Published"
  },
  {
    srNo: 15,
    title: "A MULTIPURPOSE CRYOSTAT PROBE FOR MEASURING ELECTRICAL PROPERTIES",
    type: "Patent",
    appNo: "IN 202121034926",
    status: "Published"
  },
  {
    srNo: 16,
    title: "A NOVEL MESOPOROUS BASED ORAL FORMULATION OF SILIBININ",
    type: "Patent",
    appNo: "IN 202121032630",
    status: "Published"
  },
  {
    srNo: 17,
    title: "DIAMIDE DERIVATIVE OFMETHOTREXATE WITH HETEROCYCLIC ACID AND PROCESSOF PREPARING THE SAME",
    type: "Patent",
    appNo: "IN 202121031769",
    status: "Published"
  },
  {
    srNo: 18,
    title: "THIAZOLE DERIVATIVES AS AN ANTI-CANCER AGENTS",
    type: "Patent",
    appNo: "IN 202121044779",
    status: "Granted"
  },
  {
    srNo: 19,
    title: "TETRAHYDROPYRIDOPYRAZINE DERIVATIVES AS AN ANTI-TUBERCULAR AGENTS",
    type: "Patent",
    appNo: "IN 202121044780",
    status: "Granted"
  },
  {
    srNo: 20,
    title: "HEXAHYDROPYRIDOPYRAZINE DERIVATIVES AS AN ANTI-TUBERCULAR AGENTS",
    type: "Patent",
    appNo: "IN 202121044781",
    status: "Granted"
  },
  {
    srNo: 21,
    title: "NOVEL QUINOLINE DERIVATIVE COMPOUND AS AN ANTI-CANCER AGENTS",
    type: "Patent",
    appNo: "IN 202121044777",
    status: "Granted"
  },
  {
    srNo: 22,
    title: "NOVEL HYDRAZINOTHIAZOLE DERIVATIVE COMPOUND AS AN ANTI-CANCER AGENTS",
    type: "Patent",
    appNo: "IN 202121044778",
    status: "Granted"
  },
  {
    srNo: 23,
    title: "KEY CHAIN BOX",
    type: "Design",
    appNo: "389095-001",
    status: "Granted"
  },
  {
    srNo: 24,
    title: "A NOVEL DIHYDROPYRIMIDO BENZIMIDAZOLE DERIVATIVES AS AN ANTI-CANCER AGENTS",
    type: "Patent",
    appNo: "IN 202321057039",
    status: "Published"
  },
  {
    srNo: 25,
    title: "A METHOD FOR PLANT SEX DETERMINATION IN CARICA PAPAYA L. AT EARLY STAGE",
    type: "Patent",
    appNo: "IN 202321050596",
    status: "Published"
  },
  {
    srNo: 26,
    title: "A PROCESS FOR PREPARATION OF ZIRCONIUM NANOPARTICLES FROM MORUS ALBA LEAF EXTRACT",
    type: "Patent",
    appNo: "IN 202321074655",
    status: "Applied"
  },
  {
    srNo: 27,
    title: "A METHOD FOR PLANT SEX DETERMINATION IN PHOENIX DACTYLIFERA AND TRICHOSANTHES DIOCA AT SEEDLING STAGE",
    type: "Patent",
    appNo: "IN 202321087122",
    status: "Applied"
  },
  {
    srNo: 28,
    title: "StethUp",
    type: "Trademark",
    appNo: "6066186",
    status: "Applied"
  },
  {
    srNo: 29,
    title: "Earthtech Innovations Pvt Ltd",
    type: "Trademark",
    appNo: "6006549",
    status: "Applied"
  },
  {
    srNo: 30,
    title: "\"DigiCSR - Enhancing the Capability Class 35 and 41\"",
    type: "Trademark",
    appNo: "5907662",
    status: "Applied"
  },
  {
    srNo: 31,
    title: "\"DigiCSR - Enhancing the Capability Class 35 and 41\"",
    type: "Trademark",
    appNo: "5899156",
    status: "Applied"
  },
  {
    srNo: 32,
    title: "Liquid formulation of salt-tolerant, alkali-tolerant, and thermo-tolerant plant growth-promoting rhizobacteria enhanced the growth of mung bean crop",
    type: "Patent",
    appNo: "IN 202321050706",
    status: "Published"
  },
  {
    srNo: 33,
    title: "VR UPCHAR PVT LTD",
    type: "Trademark",
    appNo: "6110339",
    status: "Applied"
  },
  {
    srNo: 34,
    title: "PURIFIED SERINE PROTEASR VARIANT FROM NOCARDIOPSIS DASSONVILLEI, ITS IMMOBILIZATION AND A METHOD THEREOF",
    type: "Patent",
    appNo: "IN 202321065489",
    status: "Applied"
  },
  {
    srNo: 35,
    title: "TALC-BASED BIO-FERTILIZER COMPOSITION AND METHOD OF SYNTHESIZING THE SAME",
    type: "Patent",
    appNo: "IN 202321065487",
    status: "Published"
  },
  {
    srNo: 36,
    title: "E-WELT TECHNOLOGY LLP",
    type: "Trademark",
    appNo: "6027465",
    status: "Applied"
  },
  {
    srNo: 37,
    title: "HEALTH",
    type: "Trademark",
    appNo: "6122798",
    status: "Applied"
  },
  {
    srNo: 38,
    title: "TCP with Network Coding - A Novel Scheme to Improve Performance in Wireless Multihop Network",
    type: "Copyright",
    appNo: "31670/2023-CO/L",
    status: "Applied"
  },
  {
    srNo: 39,
    title: "Design and Development of Audio Encryption Algorithm with High Energy Efficiency for Secure Communication",
    type: "Copyright",
    appNo: "31667/2023-CO/L",
    status: "Applied"
  },
  {
    srNo: 40,
    title: "“Method for Immobilization and Cost-Effective Co-Production of Extremozymes",
    type: "Patent",
    appNo: "202421035535",
    status: "Published"
  },
  {
    srNo: 41,
    title: "AN OAK GALL LOADED NANOPARTICLE LADEN IN SITU FILM FORMING SPRAY FORMULATION",
    type: "Patent",
    appNo: "202321059882",
    status: "Applied"
  },
  {
    srNo: 42,
    title: "A QUERCETIN LOADED TARGETED LIPOSOME FORMULATION",
    type: "Patent",
    appNo: "202321063161",
    status: "Applied"
  },
  {
    srNo: 43,
    title: "A [1, 2, 4] TRIAZOLO [4, 3- a] PIPERAZINE HYBRID AND ITS DERIVATIVES",
    type: "Patent",
    appNo: "202421039810",
    status: "Applied"
  },
  {
    srNo: 44,
    title: "Microemulsion formulation of Ritonavir",
    type: "Patent",
    appNo: "202321064574",
    status: "Applied"
  },
  {
    srNo: 45,
    title: "AN OAK GALL LOADED NANOPARTICLE LADEN IN SITU FILM FORMING SPRAY FORMULATION",
    type: "Patent",
    appNo: "202321059882",
    status: "Applied"
  },
  {
    srNo: 46,
    title: "NANO FERTILIZER-COATED SPONGE FOR FAST SEED GERMINATION WITH SOIL LESS AGRICULTURAL",
    type: "Patent",
    appNo: "IN 202321059725",
    status: "Published"
  },
  {
    srNo: 47,
    title: "A liquid formulation of IAA-producing Priestia filamentosa KhEc 69 and process for the preparation thereof",
    type: "Patent",
    appNo: "IN 202321064354",
    status: "Published"
  },
  {
    srNo: 48,
    title: "\"“EFFECTIVENESS OF HAPPY PLACEMENT DEVICE(TENS) ON PAIN AND DISABILITY IN PATIENT WITHMIGRAINE.”\"",
    type: "Patent",
    appNo: "IN 202421045929",
    status: "Applied"
  },
  {
    srNo: 49,
    title: "\"CHEMICAL FREE PRESERVATIVE\"",
    type: "Patent",
    appNo: "IN 202121031020 -541883",
    status: "Granted"
  },
  {
    srNo: 50,
    title: "Automobile Tire Valve Cap Assembly",
    type: "Patent",
    appNo: "IN 202121031020 -541883",
    status: "Granted"
  },
  {
    srNo: 51,
    title: "Automobile Tire Valve Cap Assembly",
    type: "Patent",
    appNo: "IN 202421055188",
    status: "Published"
  },
  {
    srNo: 52,
    title: "A THIAZOLE MODIFIED LORATADINE INTERMEDIATES",
    type: "Patent",
    appNo: "IN 202421060534",
    status: "Published"
  },
  {
    srNo: 53,
    title: "A PHENOTHIAZINE-BENZO THIOAMIDE COMPOUND AS ANTI-CANCER AGENT",
    type: "Patent",
    appNo: "IN 202421052062",
    status: "Published"
  },
  {
    srNo: 54,
    title: "A HUMAN SALIVA COATED NANO FERRITES AND PROCESS OF PREPARING THEREOF",
    type: "Patent",
    appNo: "IN 202421040107",
    status: "Applied"
  },
  {
    srNo: 55,
    title: "Modified Basti Yantra",
    type: "Patent",
    appNo: "IN 202421011618",
    status: "Applied"
  },
  {
    srNo: 56,
    title: "A PHENOTHIAZINE-BENZO THIOAMIDE COMPOUND AS ANTI-CANCER AGENT",
    type: "Patent",
    appNo: "IN 202421052062",
    status: "Published"
  },
  {
    srNo: 57,
    title: "AN EMTRICITABINE DEGRADATION IMPURITIES AND PREPARATION METHOD THEREOF",
    type: "Patent",
    appNo: "IN 202421021535",
    status: "Published"
  },
  {
    srNo: 58,
    title: "HYBRID HEMOSTASIS DEVICE",
    type: "Patent",
    appNo: "IN 202421042213",
    status: "Published"
  },
  {
    srNo: 59,
    title: "PRADHAMANA NASYA YANTRA",
    type: "Patent",
    appNo: "IN 202421013010",
    status: "Published"
  },
  {
    srNo: 60,
    title: "\"A LIDLESS REUSABLE AND SEALABLE CONTAINER\"",
    type: "Patent",
    appNo: "IN 202421053588",
    status: "Applied"
  },
  {
    srNo: 61,
    title: "Automatic Solar Panel Cleaning System",
    type: "Patent",
    appNo: "IN 202421087726",
    status: "Applied"
  },
  {
    srNo: 62,
    title: "Inhalable NLC Based Powder for Diabetes",
    type: "Patent",
    appNo: "IN 202421066097",
    status: "Published"
  },
  {
    srNo: 63,
    title: "SILIBININ LOADED MESOPOROUS NANO PARTICULATE FORMULATION",
    type: "Patent",
    appNo: "202121032630",
    status: "Published"
  },
  {
    srNo: 64,
    title: "A Vaginal Topical Spray Of Curcumin",
    type: "Patent",
    appNo: "202021056463",
    status: "Published"
  },
  {
    srNo: 65,
    title: "A LIDLESS REUSABLE AND SEALABLE CONTAINER",
    type: "Patent",
    appNo: "202421053588",
    status: "Applied"
  },
  {
    srNo: 66,
    title: "Modular electronic switch and socket system",
    type: "Patent",
    appNo: "202421096382",
    status: "Applied"
  },
  {
    srNo: 67,
    title: "HYBRID HEMOSTASIS DEVICE",
    type: "Patent",
    appNo: "202421042213",
    status: "Applied"
  }
];

/**
 * IPRBeneficiary Page Component
 */
const IPRBeneficiary = () => {
  /**
   * Resolves the CSS status class based on the application status string
   * @param {string} status - Application status (e.g. Granted, Published, Applied)
   * @returns {string}
   */
  const getStatusClass = (status) => {
    const normalized = status.toLowerCase();
    if (normalized === 'granted') return 'ipr-status-granted';
    if (normalized === 'published') return 'ipr-status-published';
    return 'ipr-status-applied';
  };

  return (
    <main id="main" className="ipr-beneficiary-page space">
      <section id="about_us">
        <div className="ipr-beneficiary-container">
          <div className="ipr-beneficiary-card">
            <div className="ipr-beneficiary-section-header">
              <h2>IPR Beneficiary</h2>
            </div>

            <div className="ipr-beneficiary-table-wrap">
              <table className="ipr-beneficiary-table">
                <thead>
                  <tr>
                    <th className="ipr-sr-col">Sr No.</th>
                    <th>Title</th>
                    <th>Type Of IP</th>
                    <th>Applicaton No.</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {beneficiaries.map((item) => (
                    <tr key={item.srNo}>
                      <td className="ipr-sr-cell">{item.srNo}</td>
                      <td className="ipr-title-cell"><b>{item.title}</b></td>
                      <td>{item.type}</td>
                      <td className="ipr-app-cell">{item.appNo}</td>
                      <td>
                        <span className={`ipr-status-pill ${getStatusClass(item.status)}`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default IPRBeneficiary;
