function convertLength() {
    let inputLength = parseFloat(document.querySelector("#inputLength").value);
    let inputUnit = document.querySelector("#inputUnit").value;
    let outputUnit = document.querySelector("#outputUnit").value;
  
    let conversionFactors = {
      millimeter: 1,
      centimeter: 10,
      meter: 1000,
      kilometer: 1000000,
    };
  
    // Check if the input and output units are the same
    if (inputUnit === outputUnit) {
        alert("Try to choose another measurement");
    } else {
      let outputLength;
  
      if (inputUnit === "millimeter" && outputUnit === "centimeter") {
        outputLength = inputLength / conversionFactors.centimeter;
      } else if (inputUnit === "millimeter" && outputUnit === "meter") {
        outputLength = inputLength / conversionFactors.meter;
      } else if (inputUnit === "millimeter" && outputUnit === "kilometer") {
        outputLength = inputLength / conversionFactors.kilometer;
      } else if (inputUnit === "centimeter" && outputUnit === "millimeter") {
        outputLength = inputLength * conversionFactors.centimeter;
      } else if (inputUnit === "centimeter" && outputUnit === "meter") {
        outputLength = inputLength / (conversionFactors.meter / conversionFactors.centimeter);
      } else if (inputUnit === "centimeter" && outputUnit === "kilometer") {
        outputLength = inputLength / (conversionFactors.kilometer / conversionFactors.centimeter);
      } else if (inputUnit === "meter" && outputUnit === "millimeter") {
        outputLength = inputLength * conversionFactors.meter;
      } else if (inputUnit === "meter" && outputUnit === "centimeter") {
        outputLength = inputLength * (conversionFactors.meter / conversionFactors.centimeter);
      } else if (inputUnit === "meter" && outputUnit === "kilometer") {
        outputLength = inputLength / conversionFactors.kilometer;
      } else if (inputUnit === "kilometer" && outputUnit === "millimeter") {
        outputLength = inputLength * conversionFactors.kilometer;
      } else if (inputUnit === "kilometer" && outputUnit === "centimeter") {
        outputLength = inputLength * (conversionFactors.kilometer / conversionFactors.centimeter);
      } else if (inputUnit === "kilometer" && outputUnit === "meter") {
        outputLength = inputLength * conversionFactors.kilometer;
      } else {
        outputLength = inputLength;
      }
  
      document.querySelector("#outputLength").textContent = outputLength.toFixed(2);
    }
  }
  
  function clearForm() {
    document.querySelector("#inputLength").value = "";
    document.querySelector("#inputUnit").selectedIndex = 0;
    document.querySelector("#outputUnit").selectedIndex = 0;
    document.querySelector("#outputLength").textContent = "";
  }
  