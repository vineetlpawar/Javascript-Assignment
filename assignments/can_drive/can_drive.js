function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here
    if (hasDrivingLiscence) {
        if (isTired) {
            return "You shouldn't drive"
        } else {
            if (isSober) {
                return "You can drive"
            } else {
                return "You shouldn't drive"
            }
        }
        
    } else {
        return "You cannot drive"
    }
}

module.exports = CanDrive;
