import React from "react";
import {
  Shield,
  Calendar,
  MapPin,
  Video,
  Lock,
  ShieldAlert,
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-slate-900/90" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <div className="flex justify-center mb-6">
              <Shield className="w-16 h-16 text-cyan-400" />
            </div>
            <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Cybersecurity Awareness Campaign
            </h1>
            <p className="text-xl max-w-2xl mx-auto text-slate-300">
              Empowering individuals and organizations with the knowledge to
              protect themselves in the digital age.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Event Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="flex items-center gap-4 p-6 bg-slate-800 rounded-lg border border-slate-700">
            <Calendar className="w-8 h-8 text-cyan-400" />
            <div className="text-white">
              <h3 className="font-semibold">Date</h3>
              <p className="text-slate-300">April 12, 2024</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 bg-slate-800 rounded-lg border border-slate-700">
            <MapPin className="w-8 h-8 text-cyan-400" />
            <div className="text-white">
              <h3 className="font-semibold">Location</h3>
              <p className="text-slate-300">Auditorium 1 ITLA</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 bg-slate-800 rounded-lg border border-slate-700">
            <ShieldAlert className="w-8 h-8 text-cyan-400" />
            <div className="text-white">
              <h3 className="font-semibold">Department</h3>
              <p className="text-slate-300">Information Security</p>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            Campaign Preview
          </h2>
          <div className="relative bg-slate-800 rounded-xl overflow-hidden aspect-video">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              controls
              autoPlay
              muted
              playsInline
            >
              <source src="/videos/video.mp4ideo/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Description */}
        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold mb-6 text-white">
            About the Campaign
          </h2>
          <p className="text-slate-300 mb-4">
            In an era where digital threats evolve daily, understanding
            cybersecurity has become crucial for everyone. Our campaign brings
            together experts, interactive demonstrations, and real-world case
            studies to build a stronger security awareness culture.
          </p>
          <p className="text-slate-300 mb-4">
            Through hands-on workshops, live demonstrations, and expert
            presentations, participants will learn about the latest cyber
            threats, defense strategies, and best practices for maintaining
            digital security.
          </p>
          <p className="text-slate-300">
            Join us in this critical initiative to strengthen our collective
            cyber defense capabilities and create a more secure digital
            environment for all.
          </p>
        </div>

        {/* Key Topics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-slate-800 rounded-lg border border-slate-700">
            <Lock className="w-8 h-8 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              Password Security
            </h3>
            <p className="text-slate-300">
              Learn best practices for creating and managing secure passwords
              across your digital accounts.
            </p>
          </div>
          <div className="p-6 bg-slate-800 rounded-lg border border-slate-700">
            <Shield className="w-8 h-8 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              Threat Prevention
            </h3>
            <p className="text-slate-300">
              Understand common cyber threats and develop strategies to protect
              yourself and your organization.
            </p>
          </div>
          <div className="p-6 bg-slate-800 rounded-lg border border-slate-700">
            <ShieldAlert className="w-8 h-8 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              Incident Response
            </h3>
            <p className="text-slate-300">
              Learn how to identify and respond to security incidents
              effectively and minimize potential damage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
