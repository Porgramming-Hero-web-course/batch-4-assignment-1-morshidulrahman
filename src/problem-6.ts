{

    interface profile {
        name: string,
        age: number,
        email: string
    }

    const updateProfile = (Profile: profile, updatesProfile: Partial<profile>) => {
        return { ...Profile, ...updatesProfile }
    }

    const myProfile: profile = { name: "Alice", age: 25, email: "alice@example.com" }

    const updatedProfile = updateProfile(myProfile, { age: 26 })

    console.log(updatedProfile)
}



















