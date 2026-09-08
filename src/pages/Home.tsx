import { Link, Navigate } from "react-router-dom";
import {
    Zap,
    Target,
    Calendar,
    ArrowRight,
    Sparkles,
    Clock,
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { useAuth } from "../context/AuthContext";

const features = [
    {
        icon: Sparkles,
        title: "AI-Powered Plans",
        description:
            "Get a training program tailored to your goals, experience, and schedule.",
    },
    {
        icon: Target,
        title: "Goal-Oriented",
        description:
            "Whether you want to build muscle, lose fat, or get stronger — we optimize for your goal.",
    },
    {
        icon: Calendar,
        title: "Flexible Scheduling",
        description:
            "Plans that fit your lifestyle. Train 2 days or 6 — we adapt to you.",
    },
    {
        icon: Clock,
        title: "Time-Efficient",
        description:
            "Every workout is designed to maximize results in your available time.",
    },
];

export default function Home() {
    const { user, isLoading } = useAuth();

    // Redirect authenticated users to profile
    if (!isLoading && user) {
        return <Navigate to="/profile" replace />;
    }

    return (
        <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">

            <section className="relative min-h-[780px] overflow-hidden">

                <img
                    src="/gym-hero.jpg"
                    alt="Gym training"
                    className="absolute inset-0 w-full h-full object-cover object-[center_0%]"
                />

                <div
                    className="absolute left-0 bottom-0 w-[45%] h-[55%] bg-[var(--color-accent)]/90"
                    style={{
                        clipPath: "polygon(0 20%, 100% 70%, 55% 100%, 0 100%)",
                    }}
                />

                <div
                    className="absolute left-0 bottom-0 w-[75%] h-[45%] bg-[var(--color-background)]"
                    style={{
                        clipPath: "polygon(0 0, 100% 70%, 100% 100%, 0 100%)",
                    }}
                />

                <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 lg:pt-40">

                    <div className="max-w-5xl">

                        <div className="inline-flex items-center gap-3 px-4 py-2 mb-7 border border-white/20 bg-black/30 backdrop-blur-sm">
                            <Zap className="w-4 h-4 text-[var(--color-accent)]" />

                            <span className="text-xs font-semibold tracking-[0.25em] uppercase">
                                AI Powered Fitness
                            </span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.95] mb-7">
                            Build Your
                            <br />

                            <span className="text-[var(--color-accent)]">
                                Best Body
                            </span>

                            <br />

                            With AI
                        </h1>

                        <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-xl mb-9">
                            Stop guessing what to do at the gym. Get a personalized
                            training plan built by AI and designed around your goals,
                            experience, schedule, and lifestyle.
                        </p>

                        <div className="flex flex-wrap items-center gap-4">

                            <Link to="/onboarding">
                                <Button
                                    size="lg"
                                    className="gap-2 px-7 bg-[var(--color-accent)] text-black hover:bg-[var(--color-accent-hover)]"
                                >
                                    Get Started Free
                                    <ArrowRight className="w-5 h-5" />
                                </Button>
                            </Link>

                        </div>
                    </div>

                </div>

            </section>


            <section className="relative py-24 px-6">

                <div className="max-w-7xl mx-auto">

                    {/* Section heading */}
                    <div className="text-center mb-16">

                        <div className="inline-flex items-center gap-2 mb-4">
                            <Sparkles className="w-5 h-5 text-[var(--color-accent)]" />

                            <span className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                                Why GymAI?
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5">
                            Train Smarter.
                            <br />
                            <span className="text-[var(--color-accent)]">
                                Get Better Results.
                            </span>
                        </h2>

                        <p className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto">
                            We combine fitness expertise with AI to create
                            personalized programs that actually work for you.
                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

                        {features.map((feature) => (
                            <Card
                                key={feature.title}
                                variant="bordered"
                                className="group bg-[var(--color-card)]/50 backdrop-blur-sm border-[var(--color-border)] hover:border-[var(--color-accent)]/50 transition-all duration-300 hover:-translate-y-1"
                            >

                                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center mb-5 group-hover:bg-[var(--color-accent)]/20 transition-colors">

                                    <feature.icon className="w-6 h-6 text-[var(--color-accent)]" />

                                </div>

                                <h3 className="font-semibold text-lg mb-2">
                                    {feature.title}
                                </h3>

                                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                                    {feature.description}
                                </p>

                            </Card>
                        ))}

                    </div>
                </div>
            </section>

        </div>
    );
}