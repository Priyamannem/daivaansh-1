import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, MapPin } from "lucide-react";
import Header from "@/components/Header";

const BookSiteVisit = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        location: "",
        approval: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSelectChange = (value: string) => {
        setFormData(prev => ({ ...prev, approval: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const message = `*New Site Visit Booking Request*
        
Name: ${formData.name}
Phone: ${formData.phone}
Preferred Location: ${formData.location}
Approval Type: ${formData.approval}

Please contact me to schedule a visit.`;

        const whatsappUrl = `https://wa.me/919441621551?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-24 pb-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12 items-start justify-center max-w-6xl mx-auto">

                        {/* Left Content */}
                        <div className="lg:w-1/2 space-y-8">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary-foreground text-sm font-medium border border-secondary/20">
                                Get in Touch
                            </div>

                            <div className="space-y-4">
                                <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">
                                    Book Your Free Site Visit Today
                                </h1>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    Let's help you find a plot that feels like home. Fill out the form and our team will contact you within 24 hours to schedule a free site visit.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border/50">
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground font-medium mb-1">Call us at</p>
                                        <p className="text-lg font-bold text-foreground">+91 9441621551</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border/50">
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground font-medium mb-1">Visit our office</p>
                                        <p className="text-lg font-bold text-foreground">Hyderabad, Telangana</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Form */}
                        <div className="lg:w-1/2 w-full">
                            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Your Name</Label>
                                        <Input
                                            id="name"
                                            placeholder="Enter your name"
                                            className="bg-background"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone Number</Label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                id="phone"
                                                placeholder="+91 9999999999"
                                                className="pl-9 bg-background"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="location">Preferred Location</Label>
                                        <div className="relative">
                                            <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                id="location"
                                                placeholder="e.g., Shadnagar, Maheshwaram"
                                                className="pl-9 bg-background"
                                                value={formData.location}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="approval">Approval Type Preference</Label>
                                        <Select onValueChange={handleSelectChange} value={formData.approval}>
                                            <SelectTrigger className="bg-background">
                                                <SelectValue placeholder="Select approval type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="HMDA Approved">HMDA Approved</SelectItem>
                                                <SelectItem value="YTDA Approved">YTDA Approved</SelectItem>
                                                <SelectItem value="DTCP Approved">DTCP Approved</SelectItem>
                                                <SelectItem value="Any Approved Layout">Any Approved Layout</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <Button type="submit" size="lg" className="w-full text-base font-semibold" variant="gold">
                                        Book My Site Visit
                                    </Button>

                                    <p className="text-xs text-center text-muted-foreground">
                                        By submitting, you agree to our privacy policy and terms of service.
                                    </p>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

        </div>
    );
};

export default BookSiteVisit;
