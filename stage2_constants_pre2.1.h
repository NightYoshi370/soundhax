/* stage2 constants for system versions v1.0, v1.1 and v2.0 */

#if defined(EUR)

#define FS_OPEN_FILE 0x00227B10
#define GSP_GET_HANDLE 0x0021AE54
#define GSP_GET_INTERRUPTRECEIVER 0x001C7618
#define GSP_ENQUEUE_CMD 0x001C62B8

#define FS_READ_FILE 0x002C838C
#define GSP_GX_CMD4 0x002EB144
#define GSP_FLUSH_DATA_CACHE 0x002E53E0

#define SRV_SESSIONHANDLE 0x00370BF8
#define SRV_SEMAPHORE 0x00370BE8

#define THREAD8_EVENT_HANDLE 0x00370BF8
#define THREAD8_OBJ 0x003AD6B0

#else
#error "Region not supported for this system version range"
#endif
