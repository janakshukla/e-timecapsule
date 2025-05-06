Here's a comprehensive README for the [e-timecapsule](https://github.com/janakshukla/e-timecapsule) project:

---

# 🕰️ e-TimeCapsule

**e-TimeCapsule** is a modern web application that allows users to write personal thoughts, messages, or reflections and save them for future access. Built with cutting-edge technologies, it ensures a seamless and secure experience for preserving your memories.

## 🌟 Features

* ✍️ **Write and Save Thoughts**: Compose messages or reflections to be stored securely.
* 📅 **Future Access**: Retrieve your saved messages at a later date.
* 🔒 **Secure Storage**: Utilizes MongoDB and Prisma for robust data management.
* 🌐 **Deployed on Vercel**: Ensures fast and reliable access to your time capsules.

## 🛠️ Tech Stack

* **Frontend**: [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/)
* **Backend**: [Prisma](https://www.prisma.io/), [MongoDB](https://www.mongodb.com/)
* **Email Service**: [Resend](https://resend.com/)
* **Deployment**: [Vercel](https://vercel.com/)

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

* Node.js (v14 or later)
* npm or yarn

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/janakshukla/e-timecapsule.git
   cd e-timecapsule
   ```

2. **Install dependencies**:

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory and add the following:

   ```env
   DATABASE_URL=your_mongodb_connection_string
   RESEND_API_KEY=your_resend_api_key
   ```

4. **Run the development server**:

   Using npm:

   ```bash
   npm run dev
   ```

   Or using yarn:

   ```bash
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 📁 Project Structure

* `app/`: Contains the main application components and pages.
* `components/`: Reusable UI components.
* `helpers/`: Utility functions and helpers.
* `prisma/`: Prisma schema and database configurations.

## 📬 Contact

For any inquiries or feedback, please reach out to [Janak Shukla](https://github.com/janakshukla).

---

Feel free to customize this README further to suit your project's needs!
