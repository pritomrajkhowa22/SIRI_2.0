# SIRI_2.0

Siri 2.0 is an advanced virtual assistant that builds upon the capabilities of the original Siri. Some key features of Siri 2.0 include:

Improved Natural Language Understanding: Siri 2.0 uses more sophisticated natural language processing to better understand user queries and intent, allowing for more natural and contextual conversations.

Expanded Knowledge Base: The assistant's knowledge base has been significantly expanded to cover a broader range of topics, allowing it to provide more detailed and comprehensive information and answers.


## Technologies Used

Beautiful UI & UX for Siri 2.0 Clone:

Design Principles: Follow design principles like simplicity, consistency, and responsiveness to create a visually appealing and user-friendly interface.
Mockups and Wireframes: Start by creating low-fidelity wireframes and high-fidelity mockups using tools like Figma or Adobe XD to plan the layout, interactions, and user flow.
Color Scheme and Branding: Develop a cohesive color scheme and branding elements that align with the Siri 2.0 brand identity.
Intuitive User Experience: Ensure the interface is intuitive and easy to navigate, with clear call-to-actions and visual cues to guide the user.
Responsive Design: Optimize the design for various device sizes and screen resolutions to provide a seamless experience across different platforms.
Azure OpenAI Whisper Speech Recognition Service:

Set up Azure OpenAI Service: Create an Azure OpenAI Service instance and obtain the necessary credentials (API key, endpoint, etc.).
Implement Speech-to-Text Conversion: Use the Azure OpenAI Whisper Speech Recognition API to convert user audio input to text. Handle the audio capture, file processing, and API integration.
Error Handling and Feedback: Implement robust error handling and provide clear feedback to the user in case of any issues during the speech recognition process.
Azure OpenAI Service for AI Assistant Chat Completions:

Set up Azure OpenAI Service: Create an Azure OpenAI Service instance and obtain the necessary credentials.
Implement Chat Completion Generation: Use the Azure OpenAI Service's chat completion API to generate relevant responses based on user input.
Prompt Engineering: Carefully design the prompts and templates to ensure the AI assistant provides coherent and contextual responses.
Asynchronous Handling: Implement asynchronous handling of the chat completion generation to provide a smooth and responsive user experience.
MediaRecorder API for Audio Capture:

Implement Audio Capture: Use the MediaRecorder interface of the MediaStream Recording API to capture user audio input.
Handle Audio File Formats: Ensure the captured audio is in a format compatible with the Azure OpenAI Whisper Speech Recognition Service.
Provide Feedback and Controls: Offer visual feedback to the user during the audio recording process and provide controls to start, stop, and replay the recording.
Web Speech API for Text-to-Speech:

Set up Web Speech API: Integrate the Web Speech API's speech synthesis functionality to convert the AI assistant's text responses to speech.
Customize Voice and Tone: Experiment with different voice options and settings to match the desired tone and personality of the Siri 2.0 assistant.
Synchronize Audio Playback: Ensure the text-to-speech output is properly synchronized with the visual responses in the user interface.
Tailwind CSS for Beautiful UI Design:

Set up Tailwind CSS: Install and configure Tailwind CSS in your project to leverage its utility-first CSS framework.
Develop Component Library: Create a library of custom UI components using Tailwind CSS classes to ensure consistency and reusability across the application.
Responsive Styling: Utilize Tailwind's responsive design classes to create a visually appealing and responsive user interface.
TypeScript for Improved Code Quality:

Migrate to TypeScript: Convert your project from JavaScript to TypeScript to take advantage of its static typing features and improve code quality.
Type Definitions: Ensure you have the necessary type definitions for all third-party libraries and APIs used in your project.
Type-Safe Development: Leverage TypeScript's type-checking capabilities to catch potential errors and bugs during development, leading to a more robust and maintainable codebase.
Deployment on Vercel:

Set up Vercel Account: Create a Vercel account and connect your project's repository to it.
Configure Deployment: Set up the necessary build settings and environment variables for your project in the Vercel dashboard.
Continuous Deployment: Configure Vercel to automatically deploy your project whenever you push changes to your repository, ensuring a seamless deployment process.


## Architecture Diagram

!["Sequence Diagram"](https://github.com/pritomrajkhowa22/SIRI_2.0/blob/main/AdditionalFiles/Blankdiagram.png)



## Demo Video




This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

