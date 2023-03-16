import axios from 'axios'
import { API } from '../config/config'

type TResponseGetSignedUrl = {
  url: string
  fileName: string
}

export class UploadServices {
  static async uploadFile(
    file: Blob,
    cb: (value: number) => void
  ): Promise<string | Error> {
    try {
      const data = await this.getSignedUrl(file.type, file.size)
      if (data instanceof Error) return new Error(data.message)
      await axios.put(data.url, file, {
        headers: {
          'Content-Type': file.type,
        },
        onUploadProgress: (progressEvent) => {
          const progress: number = Math.ceil(
            (progressEvent.loaded * 100) / progressEvent.total!
          )
          cb(progress)
        },
      })
      return data.fileName
    } catch (error) {
      return new Error(
        (error as { message: string }).message ||
          'Failed while uploading the file.'
      )
    }
  }

  static async getUrlImage(fileName: string): Promise<Error | string> {
    try {
      const { data } = await API.get(`/image/${fileName}`)
      if (data) return data.url
      return new Error('File not found.')
    } catch (error) {
      return new Error(
        (error as { message: string }).message || 'Failed to fetch the file.'
      )
    }
  }

  private static async getSignedUrl(
    contentType: string,
    fileSize: number
  ): Promise<Error | TResponseGetSignedUrl> {
    try {
      const url = `/image?contentType=${contentType}&fileSize=${fileSize}`
      const { data } = await API.get(url)
      if (data) return data
      return new Error('Failed to get file upload URL.')
    } catch (error) {
      return new Error('Failed to get file upload URL.')
    }
  }
}
