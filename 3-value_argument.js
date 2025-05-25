const args = process.argv.slice(2);

if (!args[0]) {
    console.log("No argument"); 
} else if (!args[1]) {
    console.log("Argument found:", args[0]);
}
else {
    console.log("Arguments found:", args.join(", "));
}



