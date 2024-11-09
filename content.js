
function extractNumber(str) {
    const match = str.match(/\((\d+)%\)/); // Regex to match a number inside parentheses, followed by a percentage sign
    return match ? parseInt(match[1]) : null; // Return the matched number, or null if no match
}

function highlightOverview() {

    const gradeElements = document.querySelectorAll(".class");

    gradeElements.forEach(element => {

        element.style.backgroundColor = "lightgray";

        const percentElement = element.querySelector(".percent");

        if (percentElement) {
            const grade = extractNumber(percentElement.textContent);
            if (grade !== null) {

                if (grade >= 93) {
                    element.style.backgroundColor = `rgba(144, 238, 144, ${(8-(100-grade))/8})`;
                } else if (grade > 90) {
                    element.style.backgroundColor = `rgba(226, 251, 152, ${(8-(93-grade))/4})`;
                } else if (grade > 87) {
                    element.style.backgroundColor = "#e2fb98";
                } else {
                    element.style.backgroundColor = "lightcoral";
                }

            }
        } else {
            console.log("No .percent element found in this .content element");
        }
    });
 
}

function highlightClasses() {

    const gradeElements = document.querySelectorAll(".nav-class");

    gradeElements.forEach(element => {

        element.classList.remove("pure-table-odd")
        element.style.backgroundColor = "lightgray";

        const percentElement = element.querySelector(".percent");

        if (percentElement) {
            const grade = extractNumber(percentElement.textContent);
            if (grade !== null) {

                if (grade >= 93) {
                    element.style.backgroundColor = `rgba(144, 238, 144, ${(8-(100-grade))/8})`;
                } else if (grade > 90) {
                    element.style.backgroundColor = `rgba(226, 251, 152, ${(8-(93-grade))/4})`;
                } else if (grade > 87) {
                    element.style.backgroundColor = "#e2fb98";
                } else {
                    element.style.backgroundColor = "lightcoral";
                }

            }
        } else {
            console.log("No .percent element found in this .content element");
        }
    });

}

const path = window.location.pathname;

if (path === "/home") {
    console.log("home rn");
    highlightOverview();
} else if (path === "/home/schedule") {
    console.log("rows rn");
    highlightClasses();
} else {
    console.log("No specific function for this path.");
}
