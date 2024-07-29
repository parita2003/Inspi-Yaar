
# Inspi-Yaar
## AI Content Generator

This project is an AI content generator built using the React framework Next.js, with responsive design via Tailwind CSS and Shadcn. It integrates the Gemini API for content generation, uses PostgreSQL for the database, and Clerk for authentication.

![image](https://github.com/user-attachments/assets/c82c5f5c-2ccf-4c7f-9b8f-9f05eddcd5b8)
![image](https://github.com/user-attachments/assets/6d7c9e59-b4ad-4896-8fc4-bf27d6b3c963)


## Features

- **Framework**: Next.js
- **Styling**: Shadcn, Tailwind CSS
- **Icons**: Lucide, Flaticon
- **API**: Gemini API, Google API (free to use)
- **Authentication**: Clerk

## Project Structure

- **Public Folder**: Store images for direct access.
- **Components Folder**: Automatically download new Shadcn components.
- **Icons**: Use Lucide for component icons and Flaticon for card icons.

## Functional Overview

1. **Text Input & Templates**: Text is inputted, matched with templates, and passed to the main page.
2. **Dashboard**: Select content template, fill the form, generate AI content, and edit in a rich text editor.
3. **Dynamic Rendering**: Interfaces for parameter navigation and content handling.
4. **Form Input**: Template-specific inputs are passed to the main page on generating content.
5. **Output**: Display content in Toast UI rich text editor with continuous save functionality using `editorRef`.

## Setup Instructions

1. **Install Dependencies**:
    ```sh
    npm install
    ```

2. **Start Development Server**:
    ```sh
    npm run dev
    ```

## API Integration

- **Gemini API**: For AI content generation.
- **Google API**: Additional functionality as needed.

## Authentication

- **Clerk**: For user authentication and management.

## Usage

1. **Run the app**:
    ```sh
    npm run dev
    ```
2. **Navigate to the main page**.
3. **Input text** and select the appropriate template.
4. **Generate AI content** and edit using the rich text editor.
5. **Save or copy** the generated content.


