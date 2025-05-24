import React from "react";
import { Heading } from "./components/ui/Heading";
import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";

function App() {
  return (
    // Main container: full height, centered content, light gray background
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 sm:p-6 lg:p-8 font-sans">
      {/*
        Header Section:
        Uses custom 'campus-blue' background, white text,
        custom heading font size, and rounded corners.
      */}
      {/* <header className="w-full max-w-4xl bg-campus-blue text-white p-6 sm:p-8 rounded-lg shadow-lg mb-8 text-center">
        <Heading as="h1" size='xl' >
        CampusLink Style Test
        </Heading>
        <p className="text-lg">
          Verifying your custom Tailwind CSS v4 setup.
        </p>
      </header> */}
      <Card variant="primary" className="max-w-4xl w-full  mb-8 text-center">
        <Heading as="h1" size="xl">
          CampusLink Style Test
        </Heading>
        <p className="text-lg">Verifying your custom Tailwind CSS v4 setup.</p>
      </Card>

      <Card
        variant="secondary" // Changed from 'secodary' to 'secondary' (typo fix)
        paddingSize="md"
        className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="text-center md:text-left md:w-1/2">
          {/* Using gray shades for text */}

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Hello from CampusLink!
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            If you can see this message with the correct colors, fonts, and
            shadows, your Tailwind CSS v4 configuration is working as expected.
            The `campus-blue` background, `gray` text, and `card-subtle` shadow
            are all coming from your custom `@theme` definitions.
          </p>

          {/*

Button demonstrating custom color and hover effect.

The hover effect is defined in your CSS's .btn-primary class.

*/}

          <Button variant="primary">Learn More</Button>
        </div>

        {/* Adjusted Placeholder for an image or icon */}
        <div
          className="
        w-48 h-48        
        sm:w-64 sm:h-64   
        bg-gray-200       
        rounded-full      
        flex items-center justify-center 
        text-gray-500 text-6xl           
        shrink-0         
        md:w-1/2         
        md:h-auto      
        md:aspect-square 
        relative         
      "
        >
          {/* This could be replaced with your actual logo or an SVG icon */}
          <span className="text-campus-blue text-8xl font-bold">C</span>{" "}
          {/* Made 'C' even bigger and bolder */}
        </div>
      </Card>

      {/* Footer section */}
      <footer className="mt-8 text-gray-500 text-sm">
        <p>&copy; 2025 CampusLink. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
