# 📝 Todo List Application

A modern, responsive Todo List application built with React and Vite, featuring user authentication via Clerk, local storage persistence, and advanced task management capabilities.

## 🚀 Features

- ✅ **Task Management**: Add, complete, delete, and star tasks
- 📅 **Due Date Support**: Set and view due dates for tasks
- 🔍 **Smart Filtering**: Filter tasks by All, Upcoming, Completed, and Important
- 🔤 **Multiple Sorting Options**: Sort by Due Date, Alphabetical order, or Important tasks
- 🔊 **Audio Feedback**: Play completion sound when tasks are finished
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🔐 **User Authentication**: Secure login/logout with Clerk
- 💾 **Data Persistence**: Tasks are saved locally in browser storage
- 🎨 **Modern UI**: Glass-morphism design with smooth animations

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: CSS3 with modern features (backdrop-filter, flexbox, grid)
- **Authentication**: Clerk
- **Icons**: React Icons (Font Awesome, React Icons)
- **Audio**: Web Audio API
- **Storage**: Local Storage API

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 16.0 or higher)
- **npm** (version 7.0 or higher) or **yarn**
- **Git**

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/todo-list-app.git
cd todo-list-app
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Configuration

Create a `.env` file in the root directory and add your Clerk configuration:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
```

To get your Clerk keys:
1. Sign up at [clerk.com](https://clerk.com)
2. Create a new application
3. Copy your publishable key from the dashboard

### 4. Add Required Assets

Place the following files in the `public` directory:
- `bgimg.jpg` - Background image for the application
- `finished.mp3` - Audio file that plays when tasks are completed

### 5. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
todo-list-app/
├── public/
│   ├── bgimg.jpg           # Background image
│   ├── finished.mp3        # Task completion sound
│   └── vite.svg           # Vite logo
├── src/
│   ├── components/
│   │   └── Todo.jsx       # Main Todo component
│   ├── styles/
│   │   └── Todo.css       # Component styles
│   ├── utils/
│   │   ├── constants.js   # App constants
│   │   └── helpers.js     # Helper functions
│   ├── App.jsx            # Root component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── .env                   # Environment variables
├── .env.example          # Environment template
├── .gitignore            # Git ignore rules
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md             # Project documentation
```

## 🎯 Usage Guide

### Adding Tasks
1. Type your task in the input field
2. (Optional) Select a due date using the date picker
3. Click the plus button or press Enter to add the task

### Managing Tasks
- **Complete**: Click the circle icon next to a task
- **Star/Unstar**: Click the star icon to mark as important
- **Delete**: Click the trash icon to remove a task

### Filtering Tasks
- **All**: Shows all tasks
- **Upcoming**: Shows only incomplete tasks
- **Completed**: Shows only completed tasks
- **Important**: Shows only starred tasks

### Sorting Tasks
1. Click the filter icon in the button area
2. Select from sorting options:
   - **None**: Default order
   - **Due Date**: Sort by earliest due date first
   - **A-Z**: Alphabetical order
   - **Pin To Task**: Important tasks first

## 🔒 Security Features

- **Authentication**: Clerk handles secure user authentication
- **Data Protection**: Tasks are stored locally per user session
- **Input Validation**: Client-side validation prevents empty tasks
- **XSS Protection**: React's built-in XSS protection

## 🚨 Troubleshooting

### Common Issues

**1. Clerk Authentication Not Working**
- Verify your `.env` file has the correct publishable key
- Ensure the key starts with `pk_test_` or `pk_live_`
- Check Clerk dashboard for application status

**2. Audio Not Playing**
- Ensure `finished.mp3` exists in the `public` directory
- Check browser audio permissions
- Verify file format compatibility

**3. Tasks Not Persisting**
- Check if localStorage is enabled in your browser
- Clear browser cache and try again
- Ensure you're not in incognito/private mode

**4. Styling Issues**
- Verify `bgimg.jpg` exists in the `public` directory
- Check CSS file paths are correct
- Clear browser cache

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Akula Sai Teja
- GitHub: [@SaiTeja-2101](https://github.com/SaiTeja-2101)
- Email: akulasaiteja2006@gmail.com

## 🙏 Acknowledgments

- [Clerk](https://clerk.com) for authentication services
- [React Icons](https://react-icons.github.io/react-icons/) for beautiful icons
- [Vite](https://vitejs.dev/) for blazing fast development experience

## 🐛 Known Issues

- Audio may not work on some mobile browsers due to autoplay restrictions
- Date picker styling may vary across different browsers

---

**Made with ❤️ using React and Vite**

> For questions, issues, or feature requests, please open an issue on GitHub 
