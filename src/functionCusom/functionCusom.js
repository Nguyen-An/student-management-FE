const formatTime = (time) => {
    const parts = time.split(':');
    if (parts.length === 3) {
        const formattedTime = `${parts[0]}:${parts[1]}`;
        return formattedTime;
    }
    return time; // Trả về thời gian không đúng định dạng nếu không phải "hh:mm:ss"
};

// Format thời gian
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
};

module.exports = {
    formatTime,
    formatDate,
};
