export const isLikedImage = (
    nasaId: string = "0",
    nasaIds: string[] = []
): boolean => {
    if (nasaIds.length === 0) return false;
    const index = nasaIds.find(id => id === nasaId);
    return index !== undefined;
}