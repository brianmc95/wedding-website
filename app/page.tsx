import { Heart, MapPin, Clock, Calendar, Camera, Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Gallery } from "@/components/gallery"
import { getGalleryImages } from "@/lib/gallery"

export default function WeddingWebsite() {
  const galleryImages = getGalleryImages()

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-orange-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-amber-500" />
              <span className="font-serif text-xl text-amber-900">Megan &amp; Brian </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#home" className="text-amber-700 hover:text-amber-900 transition-colors">
                Home
              </Link>
              <Link href="#story" className="text-amber-700 hover:text-amber-900 transition-colors">
                Our Story
              </Link>
              <Link href="#details" className="text-amber-700 hover:text-amber-900 transition-colors">
                Details
              </Link>
              <Link href="#rsvp" className="text-amber-700 hover:text-amber-900 transition-colors">
                RSVP
              </Link>
              <Link href="#gallery" className="text-amber-700 hover:text-amber-900 transition-colors">
                Gallery
              </Link>
              <Link href="#travel" className="text-amber-700 hover:text-amber-900 transition-colors">
                Travel
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100/50 to-amber-100/50"></div>
        <Image src="/images/hero-image.jpg" alt="Megan and Brian" fill className="object-cover opacity-30" priority />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-6xl md:text-8xl text-amber-900 mb-4">Megan &amp; Brian</h1>
          <p className="text-2xl md:text-3xl text-amber-700 mb-8 font-light">are getting married</p>
          <div className="flex items-center justify-center space-x-4 text-amber-600 mb-8">
            <Calendar className="h-6 w-6" />
            <span className="text-xl">October 3rd, 2026</span>
            <Separator orientation="vertical" className="h-6" />
            <MapPin className="h-6 w-6" />
            <span className="text-xl">Cork, Ireland</span>
          </div>
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
            <Link href="#rsvp">RSVP Now</Link>
          </Button>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-amber-900 mb-4">Our Story</h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <Image
                src="/images/story-couple.jpg"
                alt="Megan and Brian together"
                width={500}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-2xl text-amber-800 mb-3">How We Met</h3>
                <p className="text-gray-700 leading-relaxed">
                  We met through the "Woodies crew" during RAG Week at UCC in 2019. Neither of us are party animals, so
                  it feels serendipitous that we both went out that night on a whim. After some friendly competition for
                  Megan's attention, Brian won out, and we ended up talking until the early hours in Kate Hickey's
                  kitchen. The next morning, Megan made the first move and added Brian on Facebook—much to his relief,
                  as his plan to "play it cool" wasn't going to last long anyway!
                </p>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-amber-800 mb-3">Our Journey</h3>
                <p className="text-gray-700 leading-relaxed">
                  Dating wasn't always simple in those early days—Megan was working in West Cork during the week while
                  Brian juggled college and weekend shifts at Woodies. Since Brian didn't drive, Megan often made the
                  trip to collect him and bring him down to West Cork. The things we do for love! We both ended up doing
                  PhDs at UCC, supporting each other through deadlines and stress while still managing to laugh through
                  most of it.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6 md:order-2">
              <div>
                <h3 className="font-serif text-2xl text-amber-800 mb-3">The Proposal</h3>
                <p className="text-gray-700 leading-relaxed">
                  After nine years together and already building our home in Enniskeane, the proposal wasn't a complete
                  surprise—but Brian's timing and setting were kept carefully under wraps. When he suggested going on a
                  hike (suspicious for someone who's never warmed to "fun walks uphill"), Megan knew something was up.
                  Even more suspicious? He let her choose the location!
                </p>
                <p className="text-gray-700 leading-relaxed">
                  On a regular Saturday in January 2024, after feeding Winston the donkey and Jazz the miniature pony,
                  Brian suggested stopping by the site where our future home will be—at the time, just a green (and
                  slightly muddy) field. And that's where it happened. Brian got down on one knee right there on the
                  very ground where we're building our future, complete with a beautiful handwritten letter—just like
                  he'd done years earlier when asking Megan to be his girlfriend after their early UCC dates.
                </p>
              </div>
            </div>
            <div className="md:order-1">
              <Image
                src="/images/engagement-ring.jpg"
                alt="The engagement photo showing off the ring"
                width={500}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-2xl text-amber-800 mb-3">Why We're Getting Married</h3>
              <p className="text-gray-700 leading-relaxed">
                After years of growing together, supporting each other, and building a life side by side, we want to
                celebrate what we already know: we are each other's person. This is about declaring our commitment in
                front of the people who've shaped our lives and supported us. Marriage, for us, is about continuing to
                choose each other every day—through laughter, patience, showing up for big moments and small ones, and
                building a life that reflects our shared values: love, experiences, good food, and community. Getting
                married at UCC feels like coming full circle, celebrating our next chapter in the very place where it
                all began.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Details */}
      <section id="details" className="py-20 bg-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-amber-900 mb-4">Wedding Details</h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-orange-200">
              <CardHeader className="text-center">
                <CardTitle className="font-serif text-2xl text-amber-800">Ceremony</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-amber-600" />
                  <span>Saturday, October 3rd, 2026</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-amber-600" />
                  <span>1:00 PM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-amber-600" />
                  <div>
                    <p>Aula Maxima, UCC</p>
                    <p className="text-sm text-gray-600">60 College Rd, University College, Cork, T12 K5W7</p>
                    <a
                      href="https://maps.google.com/?q=Aula+Maxima+UCC+Cork+Ireland"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-amber-600 hover:text-amber-800 underline"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader className="text-center">
                <CardTitle className="font-serif text-2xl text-amber-800">Reception</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-amber-600" />
                  <span>Saturday, October 3rd, 2026</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-amber-600" />
                  <span>Following the ceremony</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-amber-600" />
                  <div>
                    <p>Fernhill House Hotel & Garden</p>
                    <p className="text-sm text-gray-600">
                      Fernhill House, Tawnies Lower, Clonakilty, Co. Cork, P85 X322
                    </p>
                    <a
                      href="https://maps.google.com/?q=Fernhill+House+Hotel+Clonakilty+Cork+Ireland"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-amber-600 hover:text-amber-800 underline"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-amber-900 mb-4">RSVP</h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
            <p className="text-gray-700 text-lg">
              Please respond by August 15, 2026. We can't wait to celebrate with you!
            </p>
          </div>

          <Card className="border-orange-200">
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

                <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3">
                  Send RSVP
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Photo Gallery */}
      <section id="gallery" className="py-20 bg-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-amber-900 mb-4">Our Journey</h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
          </div>

          <Gallery images={galleryImages} />

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              From casual dates and travel adventures to formal events and our engagement - these photos tell our story!
            </p>
            <Button variant="outline" className="border-orange-300 text-amber-700 hover:bg-orange-100 bg-transparent">
              <Camera className="h-4 w-4 mr-2" />
              Click any photo to view full size
            </Button>
          </div>
        </div>
      </section>

      {/* Travel & Accommodations */}
      <section id="travel" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-amber-900 mb-4">Travel & Accommodations</h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-amber-800">Ceremony</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-amber-700 mb-2">Aula Maxima</h4>
                  <p className="text-gray-700">
                    The Aula Maxima can be found on the main campus of UCC in the West Wing. It is the Eastern most room
                    on the North side of the West Wing found on the Quad.
                  </p>
                  <a
                    href="https://maps.app.goo.gl/emYtxJQYpBwE3JuE8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-amber-600 hover:text-amber-800 underline block mt-1"
                  >
                    View on Google Maps
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-700 mb-2">Car Parks</h4>
                  <p className="text-gray-700">
                    Two car parks are available for use for the Ceremony, the first by{" "}
                    <a
                      href="https://maps.app.goo.gl/c4k84vak95QF7BLH7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-600 hover:text-amber-800 underline"
                    >
                      Gaols Bridge
                    </a>{" "}
                    and the other on{" "}
                    <a
                      href="https://maps.app.goo.gl/sN59Lb93egPmuSS1A"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-600 hover:text-amber-800 underline"
                    >
                      Perrotts Avenue
                    </a>
                    .
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-amber-800">Reception</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-amber-700 mb-2">Fernhill House hotel &amp; Garden</h4>
                  <p className="text-gray-700 text-sm">
                    Fernhill House, Tawnies Lower, Clonakilty, Co. Cork, P85 X322
                    <br />
                    023 8833258
                    <br />
                    Rooms have been allocated for the wedding. We have been in touch for those who can be accomodated
                    here directly.
                  </p>
                  <a
                    href="https://maps.app.goo.gl/VEUDU3uhgqVv858x6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-amber-600 hover:text-amber-800 underline"
                  >
                    View on Google Maps
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-700 mb-2">Near Reception Venue</h4>
                  <p className="text-gray-700 text-sm">
                    For those not staying in Fernhill, there are several hotels, B&Bs and guesthouses available. We
                    recommend booking early as it's a popular area.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Heart className="h-8 w-8 text-amber-300" />
            <span className="font-serif text-3xl">Megan & Brian</span>
            <Heart className="h-8 w-8 text-amber-300" />
          </div>
          <p className="text-amber-200 mb-6">We can't wait to celebrate with you on our special day!</p>
          <div className="flex justify-center space-x-6">
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>brianmccarthy95@email.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>087 962 4138</span>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-amber-800 text-amber-300 text-sm">
            <p>&copy; 2026 Megan & Brian. Made with love.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
