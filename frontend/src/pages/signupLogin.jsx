import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FcGoogle } from 'react-icons/fc';
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { useNavigate } from 'react-router-dom';

// 🔐 Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDia6IPjM6jXD1ZFAY24gvMNysAgQCr9Ko",
  authDomain: "campuslink-e5848.firebaseapp.com",
  projectId: "campuslink-e5848",
  storageBucket: "campuslink-e5848.firebasestorage.app",
  messagingSenderId: "976684184291",
  appId: "1:976684184291:web:f87df4a079b72ba5d60bd6",
  measurementId: "G-W6Y9EBFX5M"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

const AuthForm = ({ isLogin, toggleForm }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const validate = () => {
    const errs = {};
    if (!formData.email.includes('@')) errs.email = 'Enter a valid email';
    if (!formData.password || formData.password.length < 6) errs.password = 'Password must be at least 6 characters';
    if (!isLogin && formData.password !== formData.confirmPassword) errs.confirmPassword = 'Passwords do not match';
    if (!isLogin && !formData.name.trim()) errs.name = 'Name is required';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) return setErrors(errs);
    setLoading(true);
    setErrors({});
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
        alert('Login successful!');
      } else {
        await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        alert('Registration successful!');
      }
      navigate('/home');
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert('Logged in with Google');
      navigate('/home');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-sm p-6 bg-white rounded-3xl shadow-xl text-center"
    >
      <h2 className="text-xl md:text-2xl font-bold text-indigo-600 mb-4">
        {isLogin ? 'Welcome back! Glad to see you again' : "Hello! Sign Up let's get started"}
      </h2>

      <div className="flex justify-center space-x-4 mb-4">
        <button><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" className="w-6" alt="linkedin" /></button>
        <button onClick={handleGoogleLogin}><FcGoogle className="text-2xl" /></button>
        <button><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" className="w-6" alt="facebook" /></button>
      </div>

      <p className="text-sm mb-4 font-semibold text-gray-500">or login with email</p>

      <form onSubmit={handleSubmit} className="space-y-3 text-left">
        {!isLogin && (
          <div>
            <input type="text" name="name" placeholder="Username" className="w-full px-4 py-2 bg-gray-100 rounded-full" value={formData.name} onChange={handleChange} />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
        )}
        <div>
          <input type="email" name="email" placeholder="Email" className="w-full px-4 py-2 bg-gray-100 rounded-full" value={formData.email} onChange={handleChange} />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" className="w-full px-4 py-2 bg-gray-100 rounded-full" value={formData.password} onChange={handleChange} />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>
        {!isLogin && (
          <div>
            <input type="password" name="confirmPassword" placeholder="Confirm Password" className="w-full px-4 py-2 bg-gray-100 rounded-full" value={formData.confirmPassword} onChange={handleChange} />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
            <div className="text-xs mt-1 text-gray-600">
              <input type="checkbox" required className="mr-1" /> I agree to the <a href="#" className="underline">Terms & Conditions</a> & <a href="#" className="underline">Privacy Policy</a>
            </div>
          </div>
        )}
        <div className="flex justify-between text-sm text-gray-600">
          {isLogin && <a href="#" className="ml-auto text-indigo-500 hover:underline">Forgot Password?</a>}
        </div>
        <button type="submit" className="w-full py-2 mt-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
          {loading ? 'Please wait...' : isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>

      <p className="text-sm mt-4">
        {isLogin ? 'New user?' : 'Already have an account?'}{' '}
        <button onClick={toggleForm} className="text-indigo-600 underline">
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </p>
    </motion.div>
  );
};

function RegistrationPage() {
  const [isLogin, setIsLogin] = useState(true);
  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="min-h-screen bg-cyan-700 flex items-center justify-center px-4">
      <AuthForm isLogin={isLogin} toggleForm={toggleForm} />
    </div>
  );
}

export default RegistrationPage;
