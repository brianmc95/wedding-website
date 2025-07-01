import { Heart, MapPin, Clock, Calendar, Camera, Gift, Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export default function WeddingWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-pink-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-rose-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-rose-500" />
              <span className="font-serif text-xl text-rose-900">Sarah & Michael</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#home" className="text-rose-700 hover:text-rose-900 transition-colors">
                Home
              </Link>
              <Link href="#story" className="text-rose-700 hover:text-rose-900 transition-colors">
                Our Story
              </Link>
              <Link href="#details" className="text-rose-700 hover:text-rose-900 transition-colors">
                Details
              </Link>
              <Link href="#rsvp" className="text-rose-700 hover:text-rose-900 transition-colors">
                RSVP
              </Link>
              <Link href="#gallery" className="text-rose-700 hover:text-rose-900 transition-colors">
                Gallery
              </Link>
              <Link href="#registry" className="text-rose-700 hover:text-rose-900 transition-colors">
                Registry
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-100/50 to-pink-100/50"></div>
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Sarah and Michael"
          fill
          className="object-cover opacity-20"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-6xl md:text-8xl text-rose-900 mb-4">Sarah & Michael</h1>
          <p className="text-2xl md:text-3xl text-rose-700 mb-8 font-light">are getting married</p>
          <div className="flex items-center justify-center space-x-4 text-rose-600 mb-8">
            <Calendar className="h-6 w-6" />
            <span className="text-xl">June 15, 2024</span>
            <Separator orientation="vertical" className="h-6" />
            <MapPin className="h-6 w-6" />
            <span className="text-xl">Napa Valley, CA</span>
          </div>
          <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 text-lg">
            <Link href="#rsvp">RSVP Now</Link>
          </Button>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-rose-900 mb-4">Our Story</h2>
            <div className="w-24 h-1 bg-rose-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Sarah and Michael together"
                width={500}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-2xl text-rose-800 mb-3">How We Met</h3>
                <p className="text-gray-700 leading-relaxed">
                  We first crossed paths at a coffee shop in downtown San Francisco in the fall of 2019. Michael was
                  reading a book that Sarah had just finished, and she couldn't help but strike up a conversation. What
                  started as a chat about literature turned into hours of talking about everything under the sun.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-rose-800 mb-3">The Proposal</h3>
                <p className="text-gray-700 leading-relaxed">
                  On a beautiful spring morning in 2023, Michael surprised Sarah with a picnic in Golden Gate Park. As
                  they watched the sunrise over the city, he got down on one knee and asked her to be his forever.
                  Through happy tears, she said yes, and we've been planning our dream wedding ever since.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Details */}
      <section id="details" className="py-20 bg-rose-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-rose-900 mb-4">Wedding Details</h2>
            <div className="w-24 h-1 bg-rose-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-rose-200">
              <CardHeader className="text-center">
                <CardTitle className="font-serif text-2xl text-rose-800">Ceremony</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-rose-600" />
                  <span>Saturday, June 15, 2024</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-rose-600" />
                  <span>4:00 PM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-rose-600" />
                  <div>
                    <p>Vineyard Estate Gardens</p>
                    <p className="text-sm text-gray-600">1234 Vineyard Lane, Napa Valley, CA 94558</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-rose-200">
              <CardHeader className="text-center">
                <CardTitle className="font-serif text-2xl text-rose-800">Reception</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-rose-600" />
                  <span>Saturday, June 15, 2024</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-rose-600" />
                  <span>6:00 PM - 11:00 PM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-rose-600" />
                  <div>
                    <p>Vineyard Estate Ballroom</p>
                    <p className="text-sm text-gray-600">Same location as ceremony</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto border-rose-200">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-rose-800">Dress Code</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We're going for garden party elegance! Think cocktail attire in soft, romantic colors. Ladies,
                  consider flowy dresses and comfortable shoes for dancing. Gentlemen, a nice suit or blazer would be
                  perfect.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-rose-900 mb-4">RSVP</h2>
            <div className="w-24 h-1 bg-rose-400 mx-auto mb-6"></div>
            <p className="text-gray-700 text-lg">
              Please respond by April 15, 2024. We can't wait to celebrate with you!
            </p>
          </div>

          <Card className="border-rose-200">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Your first name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Your last name" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>

                <div>
                  <Label htmlFor="attendance">Will you be attending?</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Please select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes, I'll be there!</SelectItem>
                      <SelectItem value="no">Sorry, can't make it</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="guests">Number of Guests</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Including yourself" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Guest</SelectItem>
                      <SelectItem value="2">2 Guests</SelectItem>
                      <SelectItem value="3">3 Guests</SelectItem>
                      <SelectItem value="4">4 Guests</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="dietary">Dietary Restrictions</Label>
                  <Textarea
                    id="dietary"
                    placeholder="Please let us know about any dietary restrictions or allergies"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="message">Special Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Share your excitement or any special message for the couple!"
                    rows={3}
                  />
                </div>

                <Button type="submit" className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3">
                  Send RSVP
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Photo Gallery */}
      <section id="gallery" className="py-20 bg-rose-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-rose-900 mb-4">Our Journey</h2>
            <div className="w-24 h-1 bg-rose-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <Image
                  src={`/placeholder.svg?height=300&width=300`}
                  alt={`Gallery image ${i}`}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-rose-300 text-rose-700 hover:bg-rose-100 bg-transparent">
              <Camera className="h-4 w-4 mr-2" />
              View More Photos
            </Button>
          </div>
        </div>
      </section>

      {/* Registry Section */}
      <section id="registry" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-rose-900 mb-4">Registry</h2>
            <div className="w-24 h-1 bg-rose-400 mx-auto mb-6"></div>
            <p className="text-gray-700 text-lg">
              Your presence is the greatest gift, but if you'd like to celebrate with a gift, we've registered at a few
              of our favorite places.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-rose-200 text-center">
              <CardContent className="p-8">
                <Gift className="h-12 w-12 text-rose-600 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-rose-800 mb-2">Williams Sonoma</h3>
                <p className="text-gray-600 mb-4">Kitchen essentials and home goods</p>
                <Button variant="outline" className="border-rose-300 text-rose-700 hover:bg-rose-100 bg-transparent">
                  View Registry
                </Button>
              </CardContent>
            </Card>

            <Card className="border-rose-200 text-center">
              <CardContent className="p-8">
                <Gift className="h-12 w-12 text-rose-600 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-rose-800 mb-2">Crate & Barrel</h3>
                <p className="text-gray-600 mb-4">Furniture and home decor</p>
                <Button variant="outline" className="border-rose-300 text-rose-700 hover:bg-rose-100 bg-transparent">
                  View Registry
                </Button>
              </CardContent>
            </Card>

            <Card className="border-rose-200 text-center">
              <CardContent className="p-8">
                <Gift className="h-12 w-12 text-rose-600 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-rose-800 mb-2">Honeymoon Fund</h3>
                <p className="text-gray-600 mb-4">Help us create memories in Italy</p>
                <Button variant="outline" className="border-rose-300 text-rose-700 hover:bg-rose-100 bg-transparent">
                  Contribute
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & Travel Info */}
      <section className="py-20 bg-rose-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-rose-900 mb-4">Travel & Accommodations</h2>
            <div className="w-24 h-1 bg-rose-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-rose-200">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-rose-800">Getting There</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-rose-700 mb-2">By Car</h4>
                  <p className="text-gray-700">
                    The venue is about 1.5 hours north of San Francisco. Parking will be available on-site.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-rose-700 mb-2">By Air</h4>
                  <p className="text-gray-700">
                    Fly into San Francisco International Airport (SFO) or Oakland International Airport (OAK).
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-rose-200">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-rose-800">Where to Stay</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-rose-700 mb-2">Hotel Napa Valley</h4>
                  <p className="text-gray-700 text-sm">
                    123 Main Street, Napa, CA
                    <br />
                    (707) 555-0123
                    <br />
                    Group rate: $189/night
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-rose-700 mb-2">Vineyard Inn</h4>
                  <p className="text-gray-700 text-sm">
                    456 Vineyard Road, Napa, CA
                    <br />
                    (707) 555-0456
                    <br />
                    Group rate: $159/night
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-rose-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Heart className="h-8 w-8 text-rose-300" />
            <span className="font-serif text-3xl">Sarah & Michael</span>
            <Heart className="h-8 w-8 text-rose-300" />
          </div>
          <p className="text-rose-200 mb-6">We can't wait to celebrate with you on our special day!</p>
          <div className="flex justify-center space-x-6">
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>sarah.michael.wedding@email.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>(555) 123-4567</span>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-rose-800 text-rose-300 text-sm">
            <p>&copy; 2024 Sarah & Michael. Made with love.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
