// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $("#calculateTotal").on("click", function () {
        // Get input value for hours
        let inputHours = $("#hours").val();

        // Validate input
        if (!isValidPositiveNumber(inputHours)) {
            $("#totalCost").text("Please enter a valid positive number for hours.");
            return;
        }

        let hours = parseFloat(inputHours);
        let hourlyRate = 20;

        // Perform the calculation
        let totalCost = hours * hourlyRate;

        // Display the result in the specified element
        $("#totalCost").text("Total Cost: $" + totalCost.toFixed(2));
    });

    // Function to check if a value is a valid positive number
    function isValidPositiveNumber(value) {
        return !isNaN(parseFloat(value)) && isFinite(value) && parseFloat(value) >= 0;
    }
});
