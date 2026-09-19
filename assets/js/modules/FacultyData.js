/**
 * Faculty & Department Data Repository - PRMSU College of Engineering
 */
const FacultyData = {
    administration: {
        dean: {
            name: "Engr. Gilbert D. Deboma, REE, M.Eng.",
            title: "College Dean",
            department: "Electrical Engineering",
            email: "online.coe@prmsu.edu.ph"
        }
    },
    chairs: [
        {
            name: "Ferdinand D. Tabligan, RCE, M.Eng.",
            department: "Civil Engineering",
            code: "BSCE"
        },
        {
            name: "Melojean C. Marave, LPT, MSIT",
            department: "Computer Engineering",
            code: "BSCpE"
        },
        {
            name: "Marlon James A. Dedicatoria, RMEE, Ph.D.",
            department: "Mechanical Engineering",
            code: "BSME"
        },
        {
            name: "Dorothy Joyce S. Desierto",
            department: "Mining Engineering",
            code: "BSEM"
        }
    ],
    departments: ["CE", "CpE", "EE", "ME", "EM", "AL"]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = FacultyData;
}
