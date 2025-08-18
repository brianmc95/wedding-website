"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Trash2, Plus, Users, UserCheck, UserX } from "lucide-react"
import { getAllGuests, addGuest, deleteGuest } from "@/lib/database"
import type { Guest } from "@/lib/supabase"

export function AdminPanel() {
  const [guests, setGuests] = useState<Guest[]>([])
  const [loading, setLoading] = useState(true)
  const [showAddForm, setShowAddForm] = useState(false)

  // Add guest form state
  const [newGuest, setNewGuest] = useState({
    first_name: "",
    last_name: "",
    allows_plus_one: false,
  })

  useEffect(() => {
    loadGuests()
  }, [])

  const loadGuests = async () => {
    setLoading(true)
    const guestList = await getAllGuests()
    setGuests(guestList)
    setLoading(false)
  }

  const handleAddGuest = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newGuest.first_name.trim() || !newGuest.last_name.trim()) return

    const result = await addGuest({
      first_name: newGuest.first_name.trim(),
      last_name: newGuest.last_name.trim(),
      allows_plus_one: newGuest.allows_plus_one,
      has_responded: false,
    })

    if (result) {
      setGuests([...guests, result])
      setNewGuest({ first_name: "", last_name: "", allows_plus_one: false })
      setShowAddForm(false)
    }
  }

  const handleDeleteGuest = async (guestId: string) => {
    if (!confirm("Are you sure you want to delete this guest?")) return

    const success = await deleteGuest(guestId)
    if (success) {
      setGuests(guests.filter((g) => g.id !== guestId))
    }
  }

  const stats = {
    total: guests.length,
    responded: guests.filter((g) => g.has_responded).length,
    attending: guests.filter((g) => g.is_attending === true).length,
    notAttending: guests.filter((g) => g.is_attending === false).length,
  }

  if (loading) {
    return <div className="text-center py-8">Loading guests...</div>
  }

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Guests</p>
                <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <UserCheck className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Responded</p>
                <p className="text-2xl font-bold text-gray-900">{stats.responded}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <UserCheck className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Attending</p>
                <p className="text-2xl font-bold text-gray-900">{stats.attending}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <UserX className="h-8 w-8 text-red-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Not Attending</p>
                <p className="text-2xl font-bold text-gray-900">{stats.notAttending}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Add Guest Form */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Guest Management</CardTitle>
            <Button onClick={() => setShowAddForm(!showAddForm)} className="bg-amber-600 hover:bg-amber-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Guest
            </Button>
          </div>
        </CardHeader>
        {showAddForm && (
          <CardContent>
            <form onSubmit={handleAddGuest} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={newGuest.first_name}
                    onChange={(e) => setNewGuest({ ...newGuest, first_name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={newGuest.last_name}
                    onChange={(e) => setNewGuest({ ...newGuest, last_name: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="allowsPlusOne"
                  checked={newGuest.allows_plus_one}
                  onCheckedChange={(checked) => setNewGuest({ ...newGuest, allows_plus_one: checked as boolean })}
                />
                <Label htmlFor="allowsPlusOne">Allows Plus One</Label>
              </div>
              <div className="flex space-x-2">
                <Button type="submit" className="bg-green-600 hover:bg-green-700">
                  Add Guest
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowAddForm(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        )}
      </Card>

      {/* Guest List */}
      <Card>
        <CardHeader>
          <CardTitle>Guest List ({guests.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {guests.map((guest) => (
              <div key={guest.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-4">
                    <div>
                      <h3 className="font-medium">
                        {guest.first_name} {guest.last_name}
                      </h3>
                      {guest.email && <p className="text-sm text-gray-600">{guest.email}</p>}
                    </div>
                    <div className="flex space-x-2">
                      {guest.allows_plus_one && <Badge variant="secondary">Plus One</Badge>}
                      {guest.has_responded ? (
                        <Badge variant={guest.is_attending ? "default" : "destructive"}>
                          {guest.is_attending ? "Attending" : "Not Attending"}
                        </Badge>
                      ) : (
                        <Badge variant="outline">No Response</Badge>
                      )}
                    </div>
                  </div>
                  {guest.plus_one_name && <p className="text-sm text-gray-600 mt-1">Plus One: {guest.plus_one_name}</p>}
                  {guest.dietary_restrictions && (
                    <p className="text-sm text-gray-600 mt-1">Dietary: {guest.dietary_restrictions}</p>
                  )}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDeleteGuest(guest.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
