// // Fake API

// document.getElementById("searchBtn").addEventListener("click", function () {
//     let query = document.getElementById("searchInput").value.trim();
//     let resultBox = document.getElementById("result");

//     if (query === "") {
//         resultBox.innerHTML = "<p style='color:red;'>⚠️ Please enter a number or CNIC</p>";
//         return;
//     }

//     // Dummy logic (replace this with real API later)
//     let fakeData = {
//         "03285809899": {
//             name: "Ali Khan",
//             cnic: "37405-9876543-2",
//             number: "03285809899",
//             address: "Lahore, Pakistan",
//             network: "Jazz"
//         },
//         "3740598765432": {
//             name: "Ahmed Raza",
//             cnic: "37405-9876543-2",
//             number: "03285809878",
//             address: "Karachi, Pakistan",
//             network: "Zong"
//         }
//     };

//     if (fakeData[query]) {
//         let data = fakeData[query];
//         resultBox.innerHTML = `
//             <div style="background:#111;padding:20px;border:1px solid #0f0;border-radius:8px;margin-top:20px;box-shadow:0 0 10px #0f0;">
//                 <p><strong>Name:</strong> ${data.name}</p>
//                 <p><strong>Number:</strong> ${data.number}</p>
//                 <p><strong>CNIC:</strong> ${data.cnic}</p>
//                 <p><strong>Address:</strong> ${data.address}</p>
//                 <p><strong>Network:</strong> ${data.network}</p>
//             </div>
//         `;
//     } else {
//         resultBox.innerHTML = "<p style='color:orange;'>No record found ❌</p>";
//     }
// });


// const searchBtn = document.getElementById("searchBtn");
// const resultDiv = document.getElementById("result");

// searchBtn.addEventListener("click", () => {
//   const input = document.getElementById("searchInput").value.trim();

//   if (input === "") {
//     alert("Please enter a number or CNIC");
//     return;
//   }

//   // Show EasyPaisa payment details (receipt style)
//   resultDiv.innerHTML = `
//     <div style="max-width:400px; margin:20px auto; background:#111; border:2px solid #0f0; border-radius:12px; padding:20px; box-shadow:0 0 25px #0f0; font-family:'Poppins',sans-serif; text-align:center;">
//       <h2 style="color:#00ff00; margin-bottom:10px;">💳 Payment Required</h2>
//       <p style="color:#ccc; font-size:14px;">To view details for:</p>
//       <p style="color:#0f0; font-weight:bold; font-size:18px; margin-bottom:15px;">${input}</p>

//       <div style="background:#000; border-radius:8px; padding:15px; text-align:left; color:#0f0; box-shadow:0 0 15px #0f0 inset;">
//         <p><strong>Method:</strong> EasyPaisa</p>
//         <p><strong>Account Holder:</strong> Usama Ahmed</p>
//         <p><strong>Number:</strong> 03079970288</p>
//         <p><strong>Amount:</strong> Rs.200</p>
//       </div>

//       <p style="margin-top:18px; color:#ccc; font-size:14px;">
//         After payment, send screenshot to WhatsApp for verification:
//       </p>

//       <a href="https://wa.me/923190831123?text=Hi%20Sir!%20I%20have%20paid%20for%20details%20of%20${input}" 
//          target="_blank"
//          style="display:inline-block; margin-top:12px; padding:12px 20px; background:#0f0; color:#000; border-radius:8px; font-weight:bold; text-decoration:none; box-shadow:0 0 15px #0f0;">
//         📱 Send Payment Screenshot
//       </a>
//     </div>
//   `;
// });


const searchBtn = document.getElementById("searchBtn");
const resultDiv = document.getElementById("result");

searchBtn.addEventListener("click", () => {
  const input = document.getElementById("searchInput").value.trim();

  if (input === "") {
    alert("Please enter a number or CNIC");
    return;
  }

  // Show EasyPaisa payment details (receipt style with close btn)
  resultDiv.innerHTML = `
    <div id="receiptBox" style="position:relative; max-width:400px; margin:20px auto; background:#111; border:2px solid #0f0; border-radius:12px; padding:20px; box-shadow:0 0 25px #0f0; font-family:'Poppins',sans-serif; text-align:center;">
      
      <!-- Close Button -->
      <button onclick="document.getElementById('receiptBox').remove();" 
        style="position:absolute; top:8px; right:10px; background:#ff0000; color:#fff; border:none; border-radius:50%; width:28px; height:28px; font-weight:bold; cursor:pointer;">
        ✖
      </button>

      <h2 style="color:#00ff00; margin-bottom:10px;">💳 Payment Required</h2>
      <p style="color:#ccc; font-size:14px;">To view details for:</p>
      <p style="color:#0f0; font-weight:bold; font-size:18px; margin-bottom:15px;">${input}</p>

      <div style="background:#000; border-radius:8px; padding:15px; text-align:left; color:#0f0; box-shadow:0 0 15px #0f0 inset;">
        <p><strong>Method:</strong> EasyPaisa</p>
        <p><strong>Account Holder:</strong> Usama Ahmed</p>
        <p><strong>Account Number:</strong> 03079970288</p>
        <p><strong>Amount:</strong> Rs.300</p>
      </div>

      <p style="margin-top:18px; color:#ccc; font-size:14px;">
        After payment, send screenshot to WhatsApp for verification:
      </p>

      <a href="https://wa.me/923190831123?text=Hi%20Sir!%20I%20have%20paid%20for%20details%20of%20${input}" 
         target="_blank"
         style="display:inline-block; margin-top:12px; padding:12px 20px; background:#0f0; color:#000; border-radius:8px; font-weight:bold; text-decoration:none; box-shadow:0 0 15px #0f0;">
        📱 Send Payment Screenshot
      </a>
    </div>
  `;
});



