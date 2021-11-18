# Resume Studio

A Resume Generator built with React and styled with the help of Reactstrap. Add all relevant information, customize preferences, and print formatted resume to paper or PDF.

[📝 Live Preview](https://michaelbenzinger.github.io/resume-studio/)

<hr>

![image](https://user-images.githubusercontent.com/85148502/142471483-873cb154-3fb0-49e7-ac7d-c8625bc88d76.png)

## Challenges Presented

There were a couple of key challenges that I set out to overcome while building this app.

### 1. Clean styling even in the absence of some information

If the user chose to delete an entire category, the Resume still needed to look complete. I achieved this by using conditional rendering in React to only render the sections of the preview if the section contained data to display. In the screenshot below, Work History is hidden from the print preview.

![image](https://user-images.githubusercontent.com/85148502/142472179-850369ab-646e-4d25-bab8-cc48f522cc13.png)

### 2. Pagination for Work History and Education

Because I don't know in advance how many jobs or schools the user will add to their resume, I had to give the user the option to add or delete as many entries as they liked. In the image above, you'll see the Previous, Next, and Delete Job buttons have been conditionally disabled, because the user is on a blank page 1.

In the image below, you'll see how I approached this in the code. I added ```page``` to ```WorkHistoryForm```'s state using the ```useState``` React Hook. When the user clicks "Next Page", if there is no entry in the next index of the ```workHistoryTemp``` array, it adds a blank entry before incrementing ```page``` by 1.

![image](https://user-images.githubusercontent.com/85148502/142473271-474f0530-17f2-47fb-8220-aa8edbf67f8e.png)

In the next image, you can see how I use the changing ```page``` in state to populate the fields of the form each time ```WorkHistoryForm``` re-renders.

![image](https://user-images.githubusercontent.com/85148502/142473671-6b961e73-1938-410b-97b5-ac20a0361687.png)

### 3. Handling Which Form to Display

![image](https://user-images.githubusercontent.com/85148502/142474526-46baeb61-1184-45b5-8288-0ea21fc16873.png)

Clicking Submit on any form updates state in ```App.js```, which triggers the ```useEffect``` hook to call ```setActiveForm(null)```. This hides the active form and unhides the buttons. Because of this, I use temporary variables such as ```workHistoryTemp``` to handle ```onChange``` events and state changes within each form. ```setWorkHistory``` only gets called when the user clicks the Submit button.

Below, you'll see conditional rendering using a ```switch/case``` statement in ```UpdateForms.js```, which acts as a container for each form. If ```activeForm``` is set to ```null```, an empty ```<div>``` is displayed instead of a form.

![image](https://user-images.githubusercontent.com/85148502/142475329-df9b2185-6ca0-4c72-84d3-79264f46bc36.png)

When the user clicks "Update Personal Info", ```setActiveForm(PersonalInfoForm)``` is called, which conditionally renders the form and hides the buttons.

![image](https://user-images.githubusercontent.com/85148502/142475498-316039ba-e19b-40eb-912c-b21ca96be078.png)

<hr>

I also gave the user a selection of professional-looking sans-serif fonts, imported from Google Fonts.

![image](https://user-images.githubusercontent.com/85148502/142476015-467c21f0-6339-4754-abb8-725bbb2b22e4.png)

## Printing

It's important for the user to be able to print or export their Resume! The Print option in the header calls ```window.print()``` and makes use of a ```@media print``` rule in the stylesheet to scale up the font size and hide everything except the contents of the preview window.

![image](https://user-images.githubusercontent.com/85148502/142476453-377fef60-ed22-499c-b81d-2d983f3b26a4.png)

