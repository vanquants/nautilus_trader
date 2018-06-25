# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: messages.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf.internal import enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
from google.protobuf import descriptor_pb2
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='messages.proto',
  package='invariance_proto',
  syntax='proto3',
  serialized_pb=_b('\n\x0emessages.proto\x12\x10invariance_proto\"\x07\n\x05\x45mpty\",\n\tHeartBeat\x12\x0c\n\x04\x66rom\x18\x01 \x01(\t\x12\x11\n\ttimestamp\x18\x02 \x01(\t\"R\n\x04Tick\x12\x0e\n\x06symbol\x18\x01 \x01(\t\x12\r\n\x05venue\x18\x02 \x01(\t\x12\x0b\n\x03\x62id\x18\x03 \x01(\x01\x12\x0b\n\x03\x61sk\x18\x04 \x01(\x01\x12\x11\n\ttimestamp\x18\x05 \x01(\t\"`\n\x03\x42\x61r\x12\x0c\n\x04open\x18\x01 \x01(\x01\x12\x0c\n\x04high\x18\x02 \x01(\x01\x12\x0b\n\x03low\x18\x03 \x01(\x01\x12\r\n\x05\x63lose\x18\x04 \x01(\x01\x12\x0e\n\x06volume\x18\x05 \x01(\x05\x12\x11\n\ttimestamp\x18\x06 \x01(\t\"\x84\x01\n\x10\x42\x61rSpecification\x12.\n\tquoteType\x18\x01 \x01(\x0e\x32\x1b.invariance_proto.QuoteType\x12\x30\n\nresolution\x18\x02 \x01(\x0e\x32\x1c.invariance_proto.Resolution\x12\x0e\n\x06period\x18\x03 \x01(\x05\"\x97\x01\n\x07\x42\x61rData\x12\x0e\n\x06symbol\x18\x01 \x01(\t\x12\r\n\x05venue\x18\x02 \x01(\t\x12\x33\n\x07\x62\x61rSpec\x18\x03 \x01(\x0b\x32\".invariance_proto.BarSpecification\x12\"\n\x03\x62\x61r\x18\x04 \x01(\x0b\x32\x15.invariance_proto.Bar\x12\x14\n\x0cisHistorical\x18\x05 \x01(\x08\"2\n\x11SubscribeTickData\x12\x0e\n\x06symbol\x18\x01 \x01(\t\x12\r\n\x05venue\x18\x02 \x01(\t\",\n\x19SubscribeTickDataResponse\x12\x0f\n\x07success\x18\x01 \x01(\x08\"4\n\x13UnsubscribeTickData\x12\x0e\n\x06symbol\x18\x01 \x01(\t\x12\r\n\x05venue\x18\x02 \x01(\t\".\n\x1bUnsubscribeTickDataResponse\x12\x0f\n\x07success\x18\x01 \x01(\x08\"f\n\x10SubscribeBarData\x12\x0e\n\x06symbol\x18\x01 \x01(\t\x12\r\n\x05venue\x18\x02 \x01(\t\x12\x33\n\x07\x62\x61rSpec\x18\x03 \x01(\x0b\x32\".invariance_proto.BarSpecification\"+\n\x18SubscribeBarDataResponse\x12\x0f\n\x07success\x18\x01 \x01(\x08\"h\n\x12UnsubscribeBarData\x12\x0e\n\x06symbol\x18\x01 \x01(\t\x12\r\n\x05venue\x18\x02 \x01(\t\x12\x33\n\x07\x62\x61rSpec\x18\x03 \x01(\x0b\x32\".invariance_proto.BarSpecification\"-\n\x1aUnsubscribeBarDataResponse\x12\x0f\n\x07success\x18\x01 \x01(\x08*A\n\nResolution\x12\x08\n\x04TICK\x10\x00\x12\n\n\x06SECOND\x10\x01\x12\n\n\x06MINUTE\x10\x02\x12\x08\n\x04HOUR\x10\x03\x12\x07\n\x03\x44\x41Y\x10\x04*0\n\tQuoteType\x12\x07\n\x03\x42ID\x10\x00\x12\x07\n\x03\x41SK\x10\x01\x12\x08\n\x04LAST\x10\x02\x12\x07\n\x03MID\x10\x04\x32\xbe\x03\n\nDataServer\x12i\n\x13OnSubscribeTickData\x12#.invariance_proto.SubscribeTickData\x1a+.invariance_proto.SubscribeTickDataResponse\"\x00\x12\x66\n\x12OnSubscribeBarData\x12\".invariance_proto.SubscribeBarData\x1a*.invariance_proto.SubscribeBarDataResponse\"\x00\x12o\n\x15OnUnsubscribeTickData\x12%.invariance_proto.UnsubscribeTickData\x1a-.invariance_proto.UnsubscribeTickDataResponse\"\x00\x12l\n\x14OnUnsubscribeBarData\x12$.invariance_proto.UnsubscribeBarData\x1a,.invariance_proto.UnsubscribeBarDataResponse\"\x00\x32\xe2\x01\n\nDataClient\x12P\n\x12OnHeartBeatRequest\x12\x1b.invariance_proto.HeartBeat\x1a\x1b.invariance_proto.HeartBeat\"\x00\x12?\n\nOnTickData\x12\x16.invariance_proto.Tick\x1a\x17.invariance_proto.Empty\"\x00\x12\x41\n\tOnBarData\x12\x19.invariance_proto.BarData\x1a\x17.invariance_proto.Empty\"\x00\x42\x1b\xaa\x02\x18Nautilus.Common.Messagesb\x06proto3')
)

_RESOLUTION = _descriptor.EnumDescriptor(
  name='Resolution',
  full_name='invariance_proto.Resolution',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='TICK', index=0, number=0,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='SECOND', index=1, number=1,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='MINUTE', index=2, number=2,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='HOUR', index=3, number=3,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='DAY', index=4, number=4,
      options=None,
      type=None),
  ],
  containing_type=None,
  options=None,
  serialized_start=1064,
  serialized_end=1129,
)
_sym_db.RegisterEnumDescriptor(_RESOLUTION)

Resolution = enum_type_wrapper.EnumTypeWrapper(_RESOLUTION)
_QUOTETYPE = _descriptor.EnumDescriptor(
  name='QuoteType',
  full_name='invariance_proto.QuoteType',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='BID', index=0, number=0,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='ASK', index=1, number=1,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='LAST', index=2, number=2,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='MID', index=3, number=4,
      options=None,
      type=None),
  ],
  containing_type=None,
  options=None,
  serialized_start=1131,
  serialized_end=1179,
)
_sym_db.RegisterEnumDescriptor(_QUOTETYPE)

QuoteType = enum_type_wrapper.EnumTypeWrapper(_QUOTETYPE)
TICK = 0
SECOND = 1
MINUTE = 2
HOUR = 3
DAY = 4
BID = 0
ASK = 1
LAST = 2
MID = 4



_EMPTY = _descriptor.Descriptor(
  name='Empty',
  full_name='invariance_proto.Empty',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=36,
  serialized_end=43,
)


_HEARTBEAT = _descriptor.Descriptor(
  name='HeartBeat',
  full_name='invariance_proto.HeartBeat',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='from', full_name='invariance_proto.HeartBeat.from', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='timestamp', full_name='invariance_proto.HeartBeat.timestamp', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=45,
  serialized_end=89,
)


_TICK = _descriptor.Descriptor(
  name='Tick',
  full_name='invariance_proto.Tick',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='symbol', full_name='invariance_proto.Tick.symbol', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='venue', full_name='invariance_proto.Tick.venue', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='bid', full_name='invariance_proto.Tick.bid', index=2,
      number=3, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='ask', full_name='invariance_proto.Tick.ask', index=3,
      number=4, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='timestamp', full_name='invariance_proto.Tick.timestamp', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=91,
  serialized_end=173,
)


_BAR = _descriptor.Descriptor(
  name='Bar',
  full_name='invariance_proto.Bar',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='open', full_name='invariance_proto.Bar.open', index=0,
      number=1, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='high', full_name='invariance_proto.Bar.high', index=1,
      number=2, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='low', full_name='invariance_proto.Bar.low', index=2,
      number=3, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='close', full_name='invariance_proto.Bar.close', index=3,
      number=4, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='volume', full_name='invariance_proto.Bar.volume', index=4,
      number=5, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='timestamp', full_name='invariance_proto.Bar.timestamp', index=5,
      number=6, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=175,
  serialized_end=271,
)


_BARSPECIFICATION = _descriptor.Descriptor(
  name='BarSpecification',
  full_name='invariance_proto.BarSpecification',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='quoteType', full_name='invariance_proto.BarSpecification.quoteType', index=0,
      number=1, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='resolution', full_name='invariance_proto.BarSpecification.resolution', index=1,
      number=2, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='period', full_name='invariance_proto.BarSpecification.period', index=2,
      number=3, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=274,
  serialized_end=406,
)


_BARDATA = _descriptor.Descriptor(
  name='BarData',
  full_name='invariance_proto.BarData',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='symbol', full_name='invariance_proto.BarData.symbol', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='venue', full_name='invariance_proto.BarData.venue', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='barSpec', full_name='invariance_proto.BarData.barSpec', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='bar', full_name='invariance_proto.BarData.bar', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='isHistorical', full_name='invariance_proto.BarData.isHistorical', index=4,
      number=5, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=409,
  serialized_end=560,
)


_SUBSCRIBETICKDATA = _descriptor.Descriptor(
  name='SubscribeTickData',
  full_name='invariance_proto.SubscribeTickData',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='symbol', full_name='invariance_proto.SubscribeTickData.symbol', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='venue', full_name='invariance_proto.SubscribeTickData.venue', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=562,
  serialized_end=612,
)


_SUBSCRIBETICKDATARESPONSE = _descriptor.Descriptor(
  name='SubscribeTickDataResponse',
  full_name='invariance_proto.SubscribeTickDataResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='success', full_name='invariance_proto.SubscribeTickDataResponse.success', index=0,
      number=1, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=614,
  serialized_end=658,
)


_UNSUBSCRIBETICKDATA = _descriptor.Descriptor(
  name='UnsubscribeTickData',
  full_name='invariance_proto.UnsubscribeTickData',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='symbol', full_name='invariance_proto.UnsubscribeTickData.symbol', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='venue', full_name='invariance_proto.UnsubscribeTickData.venue', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=660,
  serialized_end=712,
)


_UNSUBSCRIBETICKDATARESPONSE = _descriptor.Descriptor(
  name='UnsubscribeTickDataResponse',
  full_name='invariance_proto.UnsubscribeTickDataResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='success', full_name='invariance_proto.UnsubscribeTickDataResponse.success', index=0,
      number=1, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=714,
  serialized_end=760,
)


_SUBSCRIBEBARDATA = _descriptor.Descriptor(
  name='SubscribeBarData',
  full_name='invariance_proto.SubscribeBarData',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='symbol', full_name='invariance_proto.SubscribeBarData.symbol', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='venue', full_name='invariance_proto.SubscribeBarData.venue', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='barSpec', full_name='invariance_proto.SubscribeBarData.barSpec', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=762,
  serialized_end=864,
)


_SUBSCRIBEBARDATARESPONSE = _descriptor.Descriptor(
  name='SubscribeBarDataResponse',
  full_name='invariance_proto.SubscribeBarDataResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='success', full_name='invariance_proto.SubscribeBarDataResponse.success', index=0,
      number=1, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=866,
  serialized_end=909,
)


_UNSUBSCRIBEBARDATA = _descriptor.Descriptor(
  name='UnsubscribeBarData',
  full_name='invariance_proto.UnsubscribeBarData',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='symbol', full_name='invariance_proto.UnsubscribeBarData.symbol', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='venue', full_name='invariance_proto.UnsubscribeBarData.venue', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='barSpec', full_name='invariance_proto.UnsubscribeBarData.barSpec', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=911,
  serialized_end=1015,
)


_UNSUBSCRIBEBARDATARESPONSE = _descriptor.Descriptor(
  name='UnsubscribeBarDataResponse',
  full_name='invariance_proto.UnsubscribeBarDataResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='success', full_name='invariance_proto.UnsubscribeBarDataResponse.success', index=0,
      number=1, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1017,
  serialized_end=1062,
)

_BARSPECIFICATION.fields_by_name['quoteType'].enum_type = _QUOTETYPE
_BARSPECIFICATION.fields_by_name['resolution'].enum_type = _RESOLUTION
_BARDATA.fields_by_name['barSpec'].message_type = _BARSPECIFICATION
_BARDATA.fields_by_name['bar'].message_type = _BAR
_SUBSCRIBEBARDATA.fields_by_name['barSpec'].message_type = _BARSPECIFICATION
_UNSUBSCRIBEBARDATA.fields_by_name['barSpec'].message_type = _BARSPECIFICATION
DESCRIPTOR.message_types_by_name['Empty'] = _EMPTY
DESCRIPTOR.message_types_by_name['HeartBeat'] = _HEARTBEAT
DESCRIPTOR.message_types_by_name['Tick'] = _TICK
DESCRIPTOR.message_types_by_name['Bar'] = _BAR
DESCRIPTOR.message_types_by_name['BarSpecification'] = _BARSPECIFICATION
DESCRIPTOR.message_types_by_name['BarData'] = _BARDATA
DESCRIPTOR.message_types_by_name['SubscribeTickData'] = _SUBSCRIBETICKDATA
DESCRIPTOR.message_types_by_name['SubscribeTickDataResponse'] = _SUBSCRIBETICKDATARESPONSE
DESCRIPTOR.message_types_by_name['UnsubscribeTickData'] = _UNSUBSCRIBETICKDATA
DESCRIPTOR.message_types_by_name['UnsubscribeTickDataResponse'] = _UNSUBSCRIBETICKDATARESPONSE
DESCRIPTOR.message_types_by_name['SubscribeBarData'] = _SUBSCRIBEBARDATA
DESCRIPTOR.message_types_by_name['SubscribeBarDataResponse'] = _SUBSCRIBEBARDATARESPONSE
DESCRIPTOR.message_types_by_name['UnsubscribeBarData'] = _UNSUBSCRIBEBARDATA
DESCRIPTOR.message_types_by_name['UnsubscribeBarDataResponse'] = _UNSUBSCRIBEBARDATARESPONSE
DESCRIPTOR.enum_types_by_name['Resolution'] = _RESOLUTION
DESCRIPTOR.enum_types_by_name['QuoteType'] = _QUOTETYPE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Empty = _reflection.GeneratedProtocolMessageType('Empty', (_message.Message,), dict(
  DESCRIPTOR = _EMPTY,
  __module__ = 'messages_pb2'
  # @@protoc_insertion_point(class_scope:invariance_proto.Empty)
  ))
_sym_db.RegisterMessage(Empty)

HeartBeat = _reflection.GeneratedProtocolMessageType('HeartBeat', (_message.Message,), dict(
  DESCRIPTOR = _HEARTBEAT,
  __module__ = 'messages_pb2'
  # @@protoc_insertion_point(class_scope:invariance_proto.HeartBeat)
  ))
_sym_db.RegisterMessage(HeartBeat)

Tick = _reflection.GeneratedProtocolMessageType('Tick', (_message.Message,), dict(
  DESCRIPTOR = _TICK,
  __module__ = 'messages_pb2'
  # @@protoc_insertion_point(class_scope:invariance_proto.Tick)
  ))
_sym_db.RegisterMessage(Tick)

Bar = _reflection.GeneratedProtocolMessageType('Bar', (_message.Message,), dict(
  DESCRIPTOR = _BAR,
  __module__ = 'messages_pb2'
  # @@protoc_insertion_point(class_scope:invariance_proto.Bar)
  ))
_sym_db.RegisterMessage(Bar)

BarSpecification = _reflection.GeneratedProtocolMessageType('BarSpecification', (_message.Message,), dict(
  DESCRIPTOR = _BARSPECIFICATION,
  __module__ = 'messages_pb2'
  # @@protoc_insertion_point(class_scope:invariance_proto.BarSpecification)
  ))
_sym_db.RegisterMessage(BarSpecification)

BarData = _reflection.GeneratedProtocolMessageType('BarData', (_message.Message,), dict(
  DESCRIPTOR = _BARDATA,
  __module__ = 'messages_pb2'
  # @@protoc_insertion_point(class_scope:invariance_proto.BarData)
  ))
_sym_db.RegisterMessage(BarData)

SubscribeTickData = _reflection.GeneratedProtocolMessageType('SubscribeTickData', (_message.Message,), dict(
  DESCRIPTOR = _SUBSCRIBETICKDATA,
  __module__ = 'messages_pb2'
  # @@protoc_insertion_point(class_scope:invariance_proto.SubscribeTickData)
  ))
_sym_db.RegisterMessage(SubscribeTickData)

SubscribeTickDataResponse = _reflection.GeneratedProtocolMessageType('SubscribeTickDataResponse', (_message.Message,), dict(
  DESCRIPTOR = _SUBSCRIBETICKDATARESPONSE,
  __module__ = 'messages_pb2'
  # @@protoc_insertion_point(class_scope:invariance_proto.SubscribeTickDataResponse)
  ))
_sym_db.RegisterMessage(SubscribeTickDataResponse)

UnsubscribeTickData = _reflection.GeneratedProtocolMessageType('UnsubscribeTickData', (_message.Message,), dict(
  DESCRIPTOR = _UNSUBSCRIBETICKDATA,
  __module__ = 'messages_pb2'
  # @@protoc_insertion_point(class_scope:invariance_proto.UnsubscribeTickData)
  ))
_sym_db.RegisterMessage(UnsubscribeTickData)

UnsubscribeTickDataResponse = _reflection.GeneratedProtocolMessageType('UnsubscribeTickDataResponse', (_message.Message,), dict(
  DESCRIPTOR = _UNSUBSCRIBETICKDATARESPONSE,
  __module__ = 'messages_pb2'
  # @@protoc_insertion_point(class_scope:invariance_proto.UnsubscribeTickDataResponse)
  ))
_sym_db.RegisterMessage(UnsubscribeTickDataResponse)

SubscribeBarData = _reflection.GeneratedProtocolMessageType('SubscribeBarData', (_message.Message,), dict(
  DESCRIPTOR = _SUBSCRIBEBARDATA,
  __module__ = 'messages_pb2'
  # @@protoc_insertion_point(class_scope:invariance_proto.SubscribeBarData)
  ))
_sym_db.RegisterMessage(SubscribeBarData)

SubscribeBarDataResponse = _reflection.GeneratedProtocolMessageType('SubscribeBarDataResponse', (_message.Message,), dict(
  DESCRIPTOR = _SUBSCRIBEBARDATARESPONSE,
  __module__ = 'messages_pb2'
  # @@protoc_insertion_point(class_scope:invariance_proto.SubscribeBarDataResponse)
  ))
_sym_db.RegisterMessage(SubscribeBarDataResponse)

UnsubscribeBarData = _reflection.GeneratedProtocolMessageType('UnsubscribeBarData', (_message.Message,), dict(
  DESCRIPTOR = _UNSUBSCRIBEBARDATA,
  __module__ = 'messages_pb2'
  # @@protoc_insertion_point(class_scope:invariance_proto.UnsubscribeBarData)
  ))
_sym_db.RegisterMessage(UnsubscribeBarData)

UnsubscribeBarDataResponse = _reflection.GeneratedProtocolMessageType('UnsubscribeBarDataResponse', (_message.Message,), dict(
  DESCRIPTOR = _UNSUBSCRIBEBARDATARESPONSE,
  __module__ = 'messages_pb2'
  # @@protoc_insertion_point(class_scope:invariance_proto.UnsubscribeBarDataResponse)
  ))
_sym_db.RegisterMessage(UnsubscribeBarDataResponse)


DESCRIPTOR.has_options = True
DESCRIPTOR._options = _descriptor._ParseOptions(descriptor_pb2.FileOptions(), _b('\252\002\030Nautilus.Common.Messages'))

_DATASERVER = _descriptor.ServiceDescriptor(
  name='DataServer',
  full_name='invariance_proto.DataServer',
  file=DESCRIPTOR,
  index=0,
  options=None,
  serialized_start=1182,
  serialized_end=1628,
  methods=[
  _descriptor.MethodDescriptor(
    name='OnSubscribeTickData',
    full_name='invariance_proto.DataServer.OnSubscribeTickData',
    index=0,
    containing_service=None,
    input_type=_SUBSCRIBETICKDATA,
    output_type=_SUBSCRIBETICKDATARESPONSE,
    options=None,
  ),
  _descriptor.MethodDescriptor(
    name='OnSubscribeBarData',
    full_name='invariance_proto.DataServer.OnSubscribeBarData',
    index=1,
    containing_service=None,
    input_type=_SUBSCRIBEBARDATA,
    output_type=_SUBSCRIBEBARDATARESPONSE,
    options=None,
  ),
  _descriptor.MethodDescriptor(
    name='OnUnsubscribeTickData',
    full_name='invariance_proto.DataServer.OnUnsubscribeTickData',
    index=2,
    containing_service=None,
    input_type=_UNSUBSCRIBETICKDATA,
    output_type=_UNSUBSCRIBETICKDATARESPONSE,
    options=None,
  ),
  _descriptor.MethodDescriptor(
    name='OnUnsubscribeBarData',
    full_name='invariance_proto.DataServer.OnUnsubscribeBarData',
    index=3,
    containing_service=None,
    input_type=_UNSUBSCRIBEBARDATA,
    output_type=_UNSUBSCRIBEBARDATARESPONSE,
    options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_DATASERVER)

DESCRIPTOR.services_by_name['DataServer'] = _DATASERVER


_DATACLIENT = _descriptor.ServiceDescriptor(
  name='DataClient',
  full_name='invariance_proto.DataClient',
  file=DESCRIPTOR,
  index=1,
  options=None,
  serialized_start=1631,
  serialized_end=1857,
  methods=[
  _descriptor.MethodDescriptor(
    name='OnHeartBeatRequest',
    full_name='invariance_proto.DataClient.OnHeartBeatRequest',
    index=0,
    containing_service=None,
    input_type=_HEARTBEAT,
    output_type=_HEARTBEAT,
    options=None,
  ),
  _descriptor.MethodDescriptor(
    name='OnTickData',
    full_name='invariance_proto.DataClient.OnTickData',
    index=1,
    containing_service=None,
    input_type=_TICK,
    output_type=_EMPTY,
    options=None,
  ),
  _descriptor.MethodDescriptor(
    name='OnBarData',
    full_name='invariance_proto.DataClient.OnBarData',
    index=2,
    containing_service=None,
    input_type=_BARDATA,
    output_type=_EMPTY,
    options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_DATACLIENT)

DESCRIPTOR.services_by_name['DataClient'] = _DATACLIENT

# @@protoc_insertion_point(module_scope)
