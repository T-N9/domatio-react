// import React, { useState ,useEffect } from "react";

// const GetData = () => {
//     let iniData = 1;
//     const [ dodata, setDoData] = useState({});

//     useEffect(() => {
//         fetch('https://t-n9.github.io/domatio-api/domatio-data.json')
//             .then(response => response.json())
//             .then(data => {
//                 setDoData(data.domatio);
//             });
//     },[iniData])

//     return (
//         <>
//             <div className="d-none">
//                 { console.log(dodata)}
//             </div>
//         </>
//     )
// }

// export default GetData;