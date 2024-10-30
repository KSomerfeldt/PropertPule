import '@/assets/styles/globals.css'
const { getTotals, getInput }  = require('./submarineLogic');


const MainLayout = ({children}) => {
    const splittedArray = getInput('app/input_1.txt');
    const totals = getTotals(splittedArray);
    
    console.log("Depth: " + totals.depth);
    console.log("Position: " + totals.position);
    console.log("Total: " + totals.total);
    console.log("Entries: " + totals.entries);
    console.log("Error: " + totals.error);
    console.log("Error On Entry: " + totals.errorOnEntry);
    
    return ( <html>
        <body>
            <main>
                {children}
            </main>
        </body>
    </html> );
}

 
export default MainLayout;