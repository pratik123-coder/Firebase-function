import { bookedHotel,roomMaster,roomMasterDisplay } from "../db/db.js";

export const getRooms = async (req, res) => {
  const { chkindt, chkoutdt } = req.body;

  const alreadyBooked = bookedHotel
    .filter(booking => booking.dt === chkindt || booking.dt === chkoutdt)
    .map(booking => booking.roomId);

  const availableRooms = roomMaster
    .filter(room => !alreadyBooked.includes(room.rID))
    .map(room => room.rID);

  const displayRoomType = roomMasterDisplay
    .filter(display => availableRooms.some(roomId => {
      const room = roomMaster.find(room => room.rID === roomId);
      return room && room.rTypeid === display.rTypeID;
    }))
    .map(display => display.roomPack);

  res.json({
    alreadybooked: alreadyBooked,
    availableRooms: availableRooms,
    displayRoomType: displayRoomType
  });
};
