const conf = {
    appwriteUrl: import.meta.env.VITE_APPWRITE_URL || "Default URL",
    appwriteProjectId: import.meta.env.VITE_APPWRITE_PROJECT_ID || "Default Project ID",
    appwriteDatabaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID || "Default Database ID",
    appwriteCollectionId: import.meta.env.VITE_APPWRITE_COLLECTION_ID || "Default Collection ID",
    appwriteBucketId: import.meta.env.VITE_APPWRITE_BUCKET_ID || "Default Bucket ID",
};

// Add fallback values (like "Default URL") to avoid runtime errors if environment variables are missing.

export default conf;
